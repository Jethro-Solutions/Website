const winston = require('winston');
const { createLogger, format, transports } = winston;
const path = require('path');

class Analytics {
  constructor() {
    this.logger = createLogger({
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
      transports: [
        new transports.File({
          filename: path.join(__dirname, '../logs/analytics.log'),
          level: 'info'
        })
      ]
    });

    this.productViews = new Map();
    this.performanceMetrics = {
      pageLoadTimes: [],
      imageLoadTimes: []
    };
  }

  trackProductView(productId, userId = 'anonymous') {
    const views = this.productViews.get(productId) || 0;
    this.productViews.set(productId, views + 1);

    this.logger.info('Product View', {
      productId,
      userId,
      timestamp: new Date().toISOString(),
      totalViews: views + 1
    });
  }

  trackPageLoad(time) {
    this.performanceMetrics.pageLoadTimes.push(time);
    if (this.performanceMetrics.pageLoadTimes.length > 100) {
      this.performanceMetrics.pageLoadTimes.shift();
    }

    this.logger.info('Page Load', {
      loadTime: time,
      timestamp: new Date().toISOString(),
      averageLoadTime: this.getAveragePageLoadTime()
    });
  }

  trackImageLoad(time, imageId) {
    this.performanceMetrics.imageLoadTimes.push({ time, imageId });
    if (this.performanceMetrics.imageLoadTimes.length > 100) {
      this.performanceMetrics.imageLoadTimes.shift();
    }

    this.logger.info('Image Load', {
      loadTime: time,
      imageId,
      timestamp: new Date().toISOString(),
      averageLoadTime: this.getAverageImageLoadTime()
    });
  }

  getAveragePageLoadTime() {
    if (this.performanceMetrics.pageLoadTimes.length === 0) return 0;
    return this.performanceMetrics.pageLoadTimes.reduce((a, b) => a + b, 0) / 
           this.performanceMetrics.pageLoadTimes.length;
  }

  getAverageImageLoadTime() {
    if (this.performanceMetrics.imageLoadTimes.length === 0) return 0;
    return this.performanceMetrics.imageLoadTimes.reduce((a, b) => a + b.time, 0) / 
           this.performanceMetrics.imageLoadTimes.length;
  }

  getProductViewCount(productId) {
    return this.productViews.get(productId) || 0;
  }

  getTopViewedProducts(limit = 10) {
    return Array.from(this.productViews.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);
  }
}

module.exports = new Analytics(); 