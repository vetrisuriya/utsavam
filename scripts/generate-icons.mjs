import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = process.cwd();
const source = await readFile(join(root, "public", "logo-mark.svg"));
const targets = [
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
  { file: "public/apple-icon.png", size: 180 },
  { file: "public/icon-64.png", size: 64 },
];

for (const target of targets) {
  const out = join(root, target.file);
  await mkdir(dirname(out), { recursive: true });
  await sharp(source, { density: 384 })
    .resize(target.size, target.size, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`wrote ${target.file}`);
}

const icoSizes = [16, 32, 48, 64];
const icoBuffers = await Promise.all(
  icoSizes.map((size) =>
    sharp(source, { density: 384 })
      .resize(size, size, { fit: "cover" })
      .png()
      .toBuffer(),
  ),
);
const ico = await pngToIco(icoBuffers);
await writeFile(join(root, "src", "app", "favicon.ico"), ico);
console.log("wrote src/app/favicon.ico");
