const sharp = require('sharp');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs').promises;
const cdnConfig = require('./cdnConfig');

class ImageProcessor {
  constructor() {
    this.allowedFormats = ['jpeg', 'png', 'webp'];
    this.maxDimensions = {
      width: 1200,
      height: 1200
    };
    this.placeholderDimensions = {
      width: 20,
      height: 20
    };
  }

  async processImage(buffer, options = {}) {
    try {
      // Generate a unique filename
      const hash = crypto.createHash('md5').update(buffer).digest('hex');
      const format = options.format || 'webp';
      const filename = `${hash}.${format}`;
      const placeholderFilename = `${hash}_placeholder.${format}`;

      // Process the image
      const image = sharp(buffer);
      
      // Resize if needed
      const metadata = await image.metadata();
      if (metadata.width > this.maxDimensions.width || metadata.height > this.maxDimensions.height) {
        image.resize(this.maxDimensions.width, this.maxDimensions.height, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Generate placeholder
      const placeholder = sharp(buffer)
        .resize(this.placeholderDimensions.width, this.placeholderDimensions.height, {
          fit: 'inside'
        })
        .blur(10);

      // Optimize based on format
      switch (format) {
        case 'webp':
          await image.webp({ quality: 80 });
          await placeholder.webp({ quality: 20 });
          break;
        case 'jpeg':
          await image.jpeg({ quality: 80 });
          await placeholder.jpeg({ quality: 20 });
          break;
        case 'png':
          await image.png({ compressionLevel: 9 });
          await placeholder.png({ compressionLevel: 9 });
          break;
      }

      // Save the processed images
      const outputPath = path.join(__dirname, '../public/images/products', filename);
      const placeholderPath = path.join(__dirname, '../public/images/products', placeholderFilename);
      
      await image.toFile(outputPath);
      await placeholder.toFile(placeholderPath);

      // Generate responsive image sizes
      const responsiveSizes = [300, 600, 900, 1200];
      const srcset = cdnConfig.getResponsiveSrcset(`/images/products/${filename}`, responsiveSizes);

      return {
        filename,
        path: `/images/products/${filename}`,
        placeholderPath: `/images/products/${placeholderFilename}`,
        format,
        dimensions: await image.metadata(),
        srcset,
        sizes: '(max-width: 1200px) 100vw, 1200px'
      };
    } catch (error) {
      throw new Error(`Image processing failed: ${error.message}`);
    }
  }

  async validateImage(buffer) {
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      
      // Check format
      if (!this.allowedFormats.includes(metadata.format)) {
        throw new Error(`Invalid image format. Allowed formats: ${this.allowedFormats.join(', ')}`);
      }

      // Check dimensions
      if (metadata.width > this.maxDimensions.width || metadata.height > this.maxDimensions.height) {
        throw new Error(`Image dimensions too large. Maximum: ${this.maxDimensions.width}x${this.maxDimensions.height}`);
      }

      return true;
    } catch (error) {
      throw new Error(`Image validation failed: ${error.message}`);
    }
  }
}

module.exports = new ImageProcessor(); 