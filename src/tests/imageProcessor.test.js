const fs = require('fs').promises;
const path = require('path');
const imageProcessor = require('../utils/imageProcessor');

describe('Image Processor', () => {
  let testImageBuffer;

  beforeAll(async () => {
    // Load a test image
    const testImagePath = path.join(__dirname, 'test-image.jpg');
    testImageBuffer = await fs.readFile(testImagePath);
  });

  test('should validate image format', async () => {
    await expect(imageProcessor.validateImage(testImageBuffer)).resolves.toBe(true);
  });

  test('should process image and generate placeholder', async () => {
    const result = await imageProcessor.processImage(testImageBuffer);
    
    expect(result).toHaveProperty('filename');
    expect(result).toHaveProperty('path');
    expect(result).toHaveProperty('placeholderPath');
    expect(result).toHaveProperty('format');
    expect(result).toHaveProperty('dimensions');
    expect(result).toHaveProperty('srcset');
    expect(result).toHaveProperty('sizes');

    // Verify the files were created
    const outputPath = path.join(__dirname, '../public/images/products', result.filename);
    const placeholderPath = path.join(__dirname, '../public/images/products', result.placeholderPath.split('/').pop());
    
    await expect(fs.access(outputPath)).resolves.not.toThrow();
    await expect(fs.access(placeholderPath)).resolves.not.toThrow();
  });

  test('should handle invalid image format', async () => {
    const invalidBuffer = Buffer.from('not an image');
    await expect(imageProcessor.validateImage(invalidBuffer)).rejects.toThrow();
  });

  afterAll(async () => {
    // Clean up test files
    const productsDir = path.join(__dirname, '../public/images/products');
    const files = await fs.readdir(productsDir);
    for (const file of files) {
      if (file.endsWith('.jpg') || file.endsWith('.webp') || file.endsWith('.png')) {
        await fs.unlink(path.join(productsDir, file));
      }
    }
  });
}); 