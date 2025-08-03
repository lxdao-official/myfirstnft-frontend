import path from 'path';
import { createCanvas, loadImage } from 'canvas';

// generate nft avatar
export default async function createImage(pfp, enableLaser) {
  const canvas = createCanvas(600, 600);
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 600, 600);
  ctx.beginPath();
  ctx.rect(0, 0, 600, 600);
  ctx.fillStyle = '#fff';
  ctx.fill();

  let images = ['/traits/Lian.jpg'];
  Object.keys(pfp).forEach((pfpKey) => {
    if (pfp[pfpKey]) {
      images.push(`/traits/${pfpKey}/${pfp[pfpKey]}.png`);
    }
  });

  // always move LaserEye to the end
  images.push(
    images.splice(
      images.findIndex((img) => img.includes('LaserEye')),
      1
    )[0]
  );

  images = images.map((image) => {
    return path.join(process.cwd(), 'public' + image);
  });

  const imagesObj = await Promise.all(images.map(loadImage));

  imagesObj.forEach((image) => {
    ctx.drawImage(image, 0, 0);
  });

  return canvas.toDataURL('image/png');
} 