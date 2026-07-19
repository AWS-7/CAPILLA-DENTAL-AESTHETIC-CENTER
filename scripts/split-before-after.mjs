import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const ASSETS =
  'C:/Users/vigne/.cursor/projects/c-Users-vigne-OneDrive-Desktop-AWS-BY-Creation-CAPILLA-DENTAL-AESTHETIC-CENTER/assets/';
const OUT = join(process.cwd(), 'public', 'gallery', 'before-after');
mkdirSync(OUT, { recursive: true });

const P = 'c__Users_vigne_OneDrive_Desktop_AWS_BY_Creation_CAPILLA-DENTAL-AESTHETIC-CENTER_';

// dir: 'h' = before(left) / after(right), 'v' = before(top) / after(bottom)
const items = [
  { src: `${P}hair_2.jpg`, out: 'ba-hair-1', dir: 'h' },
  { src: `${P}hair.jpg`, out: 'ba-hair-2', dir: 'h' },
  { src: `${P}dental.jpg`, out: 'ba-dental-1', dir: 'v' },
  { src: `${P}dntal2.jpg`, out: 'ba-dental-2', dir: 'v' },
  { src: `${P}skin_2.jpg`, out: 'ba-skin-1', dir: 'h' },
  { src: `${P}Skin.jpg`, out: 'ba-skin-2', dir: 'h' },
];

for (const it of items) {
  const input = ASSETS + it.src;
  const { width: w, height: h } = await sharp(input).metadata();

  let beforeRegion;
  let afterRegion;
  if (it.dir === 'h') {
    const half = Math.floor(w / 2);
    beforeRegion = { left: 0, top: 0, width: half, height: h };
    afterRegion = { left: half, top: 0, width: w - half, height: h };
  } else {
    const half = Math.floor(h / 2);
    beforeRegion = { left: 0, top: 0, width: w, height: half };
    afterRegion = { left: 0, top: half, width: w, height: h - half };
  }

  await sharp(input)
    .extract(beforeRegion)
    .webp({ quality: 82 })
    .toFile(join(OUT, `${it.out}-before.webp`));
  await sharp(input)
    .extract(afterRegion)
    .webp({ quality: 82 })
    .toFile(join(OUT, `${it.out}-after.webp`));

  console.log(`  ✓ ${it.out} (${it.dir}) split from ${w}x${h}`);
}

console.log('Done.');
