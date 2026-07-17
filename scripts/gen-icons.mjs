import sharp from 'sharp';
import { join } from 'node:path';

const ROOT = process.cwd();
const SOURCE = join(ROOT, 'public', 'logo.png');
// Premium brand background so the gold logo pops as an app icon.
const BG = { r: 11, g: 11, b: 11, alpha: 1 }; // #0B0B0B

/**
 * Compose a square icon: the logo centred on a solid brand background.
 * `ratio` controls how much of the square the logo occupies (leaves a
 * safe margin — important for maskable icons that get cropped by the OS).
 */
async function makeIcon(size, ratio, out) {
  const inner = Math.round(size * ratio);
  const logo = await sharp(SOURCE)
    .resize({
      width: inner,
      height: inner,
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  await sharp({
    create: { width: size, height: size, channels: 4, background: BG },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toFile(join(ROOT, 'public', out));

  console.log(`  ✓ ${out} (${size}x${size})`);
}

console.log('Generating PWA / app icons from brand logo...');
await makeIcon(192, 0.82, 'icon-192.png'); // any
await makeIcon(512, 0.82, 'icon-512.png'); // any
await makeIcon(512, 0.6, 'icon-maskable-512.png'); // maskable (safe zone)
await makeIcon(180, 0.82, 'apple-touch-icon.png'); // iOS home screen
await makeIcon(96, 0.9, 'favicon.png'); // browser tab
console.log('Done.');
