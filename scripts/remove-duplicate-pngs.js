import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const directories = [
  path.join(__dirname, '../public/gallery'),
  path.join(__dirname, '../public/treatments/dental'),
  path.join(__dirname, '../public/treatments/skin'),
  path.join(__dirname, '../public/treatments/hair'),
];

async function removeDuplicatePNGs() {
  let totalRemoved = 0;
  let totalSizeSaved = 0;

  for (const dir of directories) {
    if (!fs.existsSync(dir)) {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    const files = fs.readdirSync(dir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    for (const pngFile of pngFiles) {
      const webpFile = pngFile.replace('.png', '.webp');
      const webpPath = path.join(dir, webpFile);
      const pngPath = path.join(dir, pngFile);

      // Check if WebP version exists
      if (fs.existsSync(webpPath)) {
        const stats = fs.statSync(pngPath);
        totalSizeSaved += stats.size;
        fs.unlinkSync(pngPath);
        console.log(`✓ Removed: ${pngPath} (${(stats.size / 1024).toFixed(2)} KB)`);
        totalRemoved++;
      }
    }
  }

  console.log(`\nTotal PNG files removed: ${totalRemoved}`);
  console.log(`Total space saved: ${(totalSizeSaved / 1024 / 1024).toFixed(2)} MB`);
}

removeDuplicatePNGs();
