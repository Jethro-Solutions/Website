const config = require('../config/config');

class CDNConfig {
  constructor() {
    this.cdnBaseUrl = process.env.CDN_BASE_URL || '';
    this.enableCDN = process.env.ENABLE_CDN === 'true';
  }

  getAssetUrl(path) {
    if (!this.enableCDN) {
      return path;
    }
    return `${this.cdnBaseUrl}${path}`;
  }

  // Generate image URL with size parameters
  getImageUrl(path, options = {}) {
    const baseUrl = this.getAssetUrl(path);
    if (!options.width && !options.height) {
      return baseUrl;
    }

    const params = new URLSearchParams();
    if (options.width) params.append('w', options.width);
    if (options.height) params.append('h', options.height);
    if (options.quality) params.append('q', options.quality);
    if (options.format) params.append('fm', options.format);

    return `${baseUrl}?${params.toString()}`;
  }

  // Generate responsive image srcset
  getResponsiveSrcset(path, sizes) {
    return sizes
      .map(size => `${this.getImageUrl(path, { width: size })} ${size}w`)
      .join(', ');
  }
}

module.exports = new CDNConfig(); 