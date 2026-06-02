const Jimp = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/logo.jpg.jpeg');
    console.log(`Dimensions: ${image.bitmap.width}x${image.bitmap.height}`);
  } catch (err) {
    console.error(err);
  }
}

processImage();
