const { Jimp } = require('jimp');

async function processImage() {
  try {
    const image = await Jimp.read('public/logo.jpg.jpeg');
    
    image.scan((x, y, idx) => {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      
      const isBlueish = b > r + 20 && b > g + 10;
      
      if (!isBlueish) {
        image.bitmap.data[idx + 3] = 0; // alpha
      }
    });

    image.autocrop();

    await image.write('public/logo.png');
    console.log('Saved to public/logo.png');
  } catch (err) {
    console.error(err);
  }
}

processImage();
