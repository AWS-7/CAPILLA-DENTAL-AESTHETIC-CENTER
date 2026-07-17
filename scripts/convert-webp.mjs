import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const IMAGE_DIRS = ['public/treatments', 'public/gallery', 'public/doctors'];
const SRC_DIR = 'src';
const CONVERT_EXT = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function convertImages() {
  let converted = 0;
  let savedBytes = 0;
  for (const rel of IMAGE_DIRS) {
    const files = await walk(join(ROOT, rel));
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      if (!CONVERT_EXT.has(ext)) continue;
      const target = file.slice(0, -ext.length) + '.webp';
      const before = (await stat(file)).size;
      await sharp(file).webp({ quality: 80, effort: 5 }).toFile(target);
      const after = (await stat(target)).size;
      savedBytes += before - after;
      converted += 1;
      console.log(`  ✓ ${file.replace(ROOT, '')} → .webp (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB)`);
    }
  }
  console.log(`\nConverted ${converted} images. Saved ~${(savedBytes / 1024 / 1024).toFixed(2)} MB.`);
}

async function rewriteReferences() {
  const files = (await walk(join(ROOT, SRC_DIR))).filter((f) =>
    /\.(js|jsx|ts|tsx)$/.test(f)
  );
  const pattern = /(\/(?:treatments|gallery|doctors)\/[A-Za-z0-9\-_/]+)\.(?:jpg|jpeg|png)/g;
  let touched = 0;
  for (const file of files) {
    const content = await readFile(file, 'utf8');
    if (!pattern.test(content)) continue;
    pattern.lastIndex = 0;
    const next = content.replace(pattern, '$1.webp');
    if (next !== content) {
      await writeFile(file, next, 'utf8');
      touched += 1;
      console.log(`  ✎ updated refs in ${file.replace(ROOT, '')}`);
    }
  }
  console.log(`\nRewrote references in ${touched} source files.`);
}

console.log('Converting images to WebP...');
await convertImages();
console.log('\nRewriting source references...');
await rewriteReferences();
console.log('\nDone.');
