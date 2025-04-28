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
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogLocale: config.locale,
  twitterCard: 'summary_large_image',
  twitterSite: config.twitterHandle,
  twitterCreator: config.twitterHandle,
  themeColor: '#3498db',
  fbAppId: '',        // Add Facebook App ID when available
  articlePublishedTime: '',
  articleModifiedTime: '',
  articleSection: '',
  articleTags: []
};

/**
 * SEO middleware - injects meta tags into HTML responses
 */
export const seoMiddleware = (options = {}) => {
  const metaDefaults = { ...defaultMeta, ...options };
  
  return (req, res, next) => {
    // Create a method to set page-specific meta tags
    res.setMeta = (meta = {}) => {
      // Ensure title has site name unless explicitly disabled
      if (meta.title && !meta.noSiteName && !meta.title.includes(config.siteName)) {
        meta.title = `${meta.title} | ${config.siteName}`;
      }
      
      // Set canonical URL
      const canonical = meta.canonical || getCanonicalUrl(req.path);
      
      res.locals.meta = {
        ...metaDefaults,
        ...meta,
        canonical
      };
      
      // Generate structured data if provided
      if (meta.structuredData) {
        res.locals.structuredData = generateStructuredData(
          meta.structuredData.data,
          meta.structuredData.type
        );
      }
      
      // Generate analytics scripts
      res.locals.analyticsScripts = generateAnalyticsScripts(config.analytics);
      
      // Generate breadcrumbs if provided
      if (meta.breadcrumbs) {
        res.locals.breadcrumbs = meta.breadcrumbs;
      }
      
      // Generate alternate language links if provided
      if (meta.alternateLanguages) {
        res.locals.alternateLanguages = meta.alternateLanguages;
      }
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
  const tags = [
    // Basic meta tags
    `<title>${meta.title}</title>`,
    `<meta name="description" content="${meta.description}" />`,
    `<meta name="keywords" content="${meta.keywords}" />`,
    `<meta name="author" content="${meta.author}" />`,
    `<meta name="robots" content="${meta.robots}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    
    // Theme and mobile
    `<meta name="theme-color" content="${meta.themeColor}" />`,
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
    
    // Open Graph / Facebook
    `<meta property="og:type" content="${meta.ogType}" />`,
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:title" content="${meta.title}" />`,
    `<meta property="og:description" content="${meta.description}" />`,
    `<meta property="og:image" content="${config.productionUrl || ''}${meta.ogImage}" />`,
    `<meta property="og:image:width" content="${meta.ogImageWidth}" />`,
    `<meta property="og:image:height" content="${meta.ogImageHeight}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:site_name" content="${config.siteName}" />`
  ];
  
  // Add Facebook App ID if available
  if (meta.fbAppId) {
    tags.push(`<meta property="fb:app_id" content="${meta.fbAppId}" />`);
  }
  
  // Add Article specific tags if type is article
  if (meta.ogType === 'article') {
    if (meta.articlePublishedTime) {
      tags.push(`<meta property="article:published_time" content="${meta.articlePublishedTime}" />`);
    }
    if (meta.articleModifiedTime) {
      tags.push(`<meta property="article:modified_time" content="${meta.articleModifiedTime}" />`);
    }
    if (meta.articleSection) {
      tags.push(`<meta property="article:section" content="${meta.articleSection}" />`);
    }
    if (meta.articleTags && meta.articleTags.length > 0) {
      meta.articleTags.forEach(tag => {
        tags.push(`<meta property="article:tag" content="${tag}" />`);
      });
    }
  }
  
  // Twitter Card
  tags.push(
    `<meta property="twitter:card" content="${meta.twitterCard}" />`,
    `<meta property="twitter:url" content="${meta.canonical}" />`,
    `<meta property="twitter:title" content="${meta.title}" />`,
    `<meta property="twitter:description" content="${meta.description}" />`,
    `<meta property="twitter:image" content="${config.productionUrl || ''}${meta.ogImage}" />`
  );
  
  // Add Twitter site and creator if available
  if (meta.twitterSite) {
    tags.push(`<meta property="twitter:site" content="${meta.twitterSite}" />`);
  }
  if (meta.twitterCreator) {
    tags.push(`<meta property="twitter:creator" content="${meta.twitterCreator}" />`);
  }
  
  // Add alternate language links if available
  if (meta.alternateLanguages) {
    meta.alternateLanguages.forEach(lang => {
      tags.push(`<link rel="alternate" hreflang="${lang.code}" href="${lang.url}" />`);
    });
    // Add x-default for language selector
    if (meta.alternateLanguages.length > 0) {
      tags.push(`<link rel="alternate" hreflang="x-default" href="${meta.canonical}" />`);
    }
  }
  
  return tags.join('\n    ');
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