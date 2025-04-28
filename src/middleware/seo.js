/**
 * SEO Middleware
 * Handles meta tags and injects appropriate SEO elements
 */
import { getCanonicalUrl, generateStructuredData } from '../utils/seo.js';
import { generateAnalyticsScripts } from '../utils/analytics.js';
import { config } from '../config/config.js';

/**
 * Default meta values
 */
const defaultMeta = {
  title: 'Jethro Solutions - Modern Web Development',
  description: 'Jethro Solutions provides modern web development services, including design, development, and maintenance.',
  keywords: 'web development, web design, javascript, react, node.js',
  author: 'Jethro Solutions',
  robots: 'index, follow',
  ogType: 'website',
  ogImage: '/images/social-preview.jpg',
  twitterCard: 'summary_large_image'
};

/**
 * Analytics configuration
 */
const analyticsConfig = {
  gaId: process.env.GA_MEASUREMENT_ID || '', // Google Analytics Measurement ID
  gtmId: process.env.GTM_CONTAINER_ID || ''  // Google Tag Manager Container ID
};

/**
 * SEO middleware - injects meta tags into HTML responses
 */
export const seoMiddleware = (options = {}) => {
  const metaDefaults = { ...defaultMeta, ...options };
  
  return (req, res, next) => {
    // Create a method to set page-specific meta tags
    res.setMeta = (meta = {}) => {
      res.locals.meta = {
        ...metaDefaults,
        ...meta,
        canonical: getCanonicalUrl(req.path)
      };
      
      // Generate structured data if provided
      if (meta.structuredData) {
        res.locals.structuredData = generateStructuredData(
          meta.structuredData.data,
          meta.structuredData.type
        );
      }
      
      // Generate analytics scripts
      res.locals.analyticsScripts = generateAnalyticsScripts(analyticsConfig);
    };
    
    // Set default meta tags
    res.setMeta();
    
    next();
  };
};

/**
 * Generate HTML meta tags
 * @param {Object} meta - Meta tag data
 * @returns {string} - HTML string with meta tags
 */
export const generateMetaTags = (meta) => {
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="author" content="${meta.author}" />
    <meta name="robots" content="${meta.robots}" />
    <link rel="canonical" href="${meta.canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${meta.ogType}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${config.productionUrl || ''}${meta.ogImage}" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="${meta.twitterCard}" />
    <meta property="twitter:url" content="${meta.canonical}" />
    <meta property="twitter:title" content="${meta.title}" />
    <meta property="twitter:description" content="${meta.description}" />
    <meta property="twitter:image" content="${config.productionUrl || ''}${meta.ogImage}" />
  `;
};

/**
 * Generate JSON-LD script
 * @param {string} structuredData - JSON-LD structured data string
 * @returns {string} - HTML script tag with JSON-LD
 */
export const generateJsonLd = (structuredData) => {
  if (!structuredData) return '';
  
  return `
    <script type="application/ld+json">
      ${structuredData}
    </script>
  `;
}; 