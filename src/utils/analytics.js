const winston = require('winston');
const { createLogger, format, transports } = winston;
const path = require('path');
import { config } from '../config/config.js';

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

/**
 * Generate Google Analytics script
 * @param {string} measurementId - GA4 Measurement ID (G-XXXXXXXX)
 * @returns {string} - HTML script tags for Google Analytics
 */
export const generateGoogleAnalyticsScript = (measurementId) => {
  if (!measurementId) {
    console.warn('Google Analytics Measurement ID is not provided');
    return '';
  }

  return `
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        'cookie_domain': '${config.env === 'production' ? config.productionUrl.replace(/^https?:\/\//, '') : 'localhost'}',
        'cookie_flags': 'SameSite=None;Secure',
        'anonymize_ip': true
      });
    </script>
  `;
};

/**
 * Generate Google Tag Manager script
 * @param {string} containerId - GTM Container ID (GTM-XXXXXX)
 * @returns {string} - HTML script tags for Google Tag Manager
 */
export const generateGTMScript = (containerId) => {
  if (!containerId) {
    console.warn('Google Tag Manager Container ID is not provided');
    return '';
  }

  return `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');</script>
    <!-- End Google Tag Manager -->
    
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
  `;
};

/**
 * Generate complete analytics scripts
 * @param {Object} options - Analytics options
 * @param {string} options.gaId - Google Analytics Measurement ID
 * @param {string} options.gtmId - Google Tag Manager Container ID
 * @returns {string} - HTML script tags for all analytics
 */
export const generateAnalyticsScripts = (options = {}) => {
  const { gaId, gtmId } = options;
  let scripts = '';
  
  // Add Google Analytics if ID is provided
  if (gaId) {
    scripts += generateGoogleAnalyticsScript(gaId);
  }
  
  // Add Google Tag Manager if ID is provided
  if (gtmId) {
    scripts += generateGTMScript(gtmId);
  }
  
  return scripts;
};

/**
 * Analytics class for server-side tracking
 */
class Analytics {
  constructor() {
    this.initialized = false;
  }
  
  /**
   * Track server-side events
   * @param {string} eventName - Name of the event
   * @param {Object} eventData - Event data
   */
  trackEvent(eventName, eventData = {}) {
    if (config.env !== 'production') {
      console.log(`[Analytics] Event: ${eventName}`, eventData);
      return;
    }
    
    // Implement server-side analytics tracking here
    // This could use the Google Analytics Measurement Protocol
    // or another service for server-side tracking
  }
}

export default new Analytics(); 