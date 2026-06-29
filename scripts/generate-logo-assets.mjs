import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const source = path.join(root, 'public/images/logo/arkentra-app-icon-source.jpg');

const outputs = [
  { file: 'public/images/logo/arkentra-app-icon.png', size: 512 },
  { file: 'public/images/logo/arkentra-app-icon-1024.png', size: 1024 },
  { file: 'public/images/logo/app-icon.png', size: 512 },
  { file: 'public/favicon-16x16.png', size: 16 },
  { file: 'public/favicon-32x32.png', size: 32 },
  { file: 'public/favicon-48x48.png', size: 48 },
  { file: 'public/favicon-96x96.png', size: 96 },
  { file: 'public/apple-touch-icon.png', size: 180 },
  { file: 'public/android-chrome-192x192.png', size: 192 },
  { file: 'public/android-chrome-512x512.png', size: 512 },
];

const pipeline = sharp(source).rotate().png({ compressionLevel: 9, adaptiveFiltering: true });

for (const { file, size } of outputs) {
  const outPath = path.join(root, file);
  await mkdir(path.dirname(outPath), { recursive: true });
  await pipeline
    .clone()
    .resize(size, size, { fit: 'cover', kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: size >= 128 ? 0.6 : 0.3 })
    .toFile(outPath);
  console.log(`✓ ${file} (${size}px)`);
}

await sharp(source)
  .rotate()
  .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
  .toFile(path.join(root, 'public/favicon.ico'));

console.log('✓ public/favicon.ico');
