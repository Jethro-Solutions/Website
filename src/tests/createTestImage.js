const sharp = require('sharp');
const path = require('path');

async function createTestImage() {
  try {
    // Create a 800x600 image with a gradient
    const image = sharp({
      create: {
        width: 800,
        height: 600,
        channels: 3,
        background: { r: 255, g: 255, b: 255 }
      }
    });

    // Add some text and shapes
    const svgText = Buffer.from(`
      <svg width="800" height="600">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(0,0,255);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#grad)" />
        <text x="400" y="300" font-family="Arial" font-size="60" fill="white" text-anchor="middle">
          Test Image
        </text>
        <circle cx="400" cy="300" r="200" fill="none" stroke="white" stroke-width="10" />
      </svg>
    `);

    // Composite the SVG with the base image
    await image
      .composite([{ input: svgText }])
      .jpeg({ quality: 90 })
      .toFile(path.join(__dirname, 'test-image.jpg'));

    console.log('Test image created successfully!');
  } catch (error) {
    console.error('Error creating test image:', error);
  }
}

createTestImage(); 