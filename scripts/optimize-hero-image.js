import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = path.join(__dirname, '../public/gallery/hero-desktop-bg.png');
const outputPath = path.join(__dirname, '../public/gallery/hero-desktop-bg.webp');

async function optimizeHeroImage() {
  try {
    console.log('Optimizing hero background image...');
    
    // Get original size
    const originalStats = fs.statSync(inputPath);
    console.log(`Original size: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Convert to WebP with optimization - resize to max 1920px width and compress
    await sharp(inputPath)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: 75,
        effort: 6,
        nearLossless: false
      })
      .toFile(outputPath);
    
    // Get optimized size
    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized size: ${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Reduction: ${((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1)}%`);
    console.log('✓ Hero image optimized successfully!');
    
  } catch (error) {
    console.error('Error optimizing hero image:', error);
  }
}

optimizeHeroImage();
