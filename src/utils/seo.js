/**
 * SEO Utilities
 * Handles meta tags, structured data, and other SEO-related functionality
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from '../config/config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Generate sitemap.xml for the site
 * @param {Array} routes - Array of route objects with path and lastmod properties
 * @returns {string} - XML string of the sitemap
 */
export const generateSitemap = (routes) => {
  const baseUrl = config.env === 'production' 
    ? config.productionUrl 
    : `http://localhost:${config.port}`;
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    if (route.lastmod) {
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    }
    if (route.changefreq) {
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    }
    if (route.priority) {
      xml += `    <priority>${route.priority}</priority>\n`;
    }
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
};

/**
 * Save sitemap to file
 * @param {string} sitemapXml - XML string of the sitemap
 */
export const saveSitemap = (sitemapXml) => {
  const publicDir = path.join(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
};

/**
 * Generate robots.txt content
 * @returns {string} - robots.txt content
 */
export const generateRobotsTxt = () => {
  const baseUrl = config.env === 'production' 
    ? config.productionUrl 
    : `http://localhost:${config.port}`;
  
  let content = 'User-agent: *\n';
  
  // Disallow admin routes or any private areas
  content += 'Disallow: /admin/\n';
  content += 'Disallow: /api/\n';
  content += 'Disallow: /private/\n';
  
  // Add sitemap location
  content += `Sitemap: ${baseUrl}/sitemap.xml\n`;
  
  return content;
};

/**
 * Save robots.txt to file
 * @param {string} robotsTxt - robots.txt content
 */
export const saveRobotsTxt = (robotsTxt) => {
  const publicDir = path.join(__dirname, '../../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
};

/**
 * Generate JSON-LD structured data for a page
 * @param {Object} data - Data for structured data
 * @param {string} type - Type of structured data (e.g., 'WebPage', 'Organization', 'Product')
 * @returns {string} - JSON-LD string
 */
export const generateStructuredData = (data, type) => {
  let structuredData = {
    '@context': 'https://schema.org',
    '@type': type
  };
  
  // Merge data into structuredData
  structuredData = { ...structuredData, ...data };
  
  return JSON.stringify(structuredData);
};

/**
 * Generate canonical URL
 * @param {string} path - URL path
 * @returns {string} - Canonical URL
 */
export const getCanonicalUrl = (path) => {
  const baseUrl = config.env === 'production' 
    ? config.productionUrl 
    : `http://localhost:${config.port}`;
  
  return `${baseUrl}${path}`;
};

/**
 * Generate Organization structured data
 * @returns {Object} - Organization structured data
 */
export const generateOrganizationData = () => {
  return {
    '@type': 'Organization',
    name: config.siteName,
    url: config.productionUrl,
    logo: `${config.productionUrl}/images/logo.png`,
    sameAs: [
      'https://twitter.com/jethrosolutions',
      'https://facebook.com/jethrosolutions',
      'https://linkedin.com/company/jethrosolutions',
      'https://github.com/jethrosolutions'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      email: 'info@jethrosolutions.com',
      areaServed: 'Worldwide',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US'
    }
  };
};

/**
 * Generate WebPage structured data
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} url - Page URL
 * @param {string} imageUrl - Page image URL
 * @returns {Object} - WebPage structured data
 */
export const generateWebPageData = (title, description, url, imageUrl) => {
  return {
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: imageUrl ? `${config.productionUrl}${imageUrl}` : undefined,
    inLanguage: config.locale.split('_')[0],
    isPartOf: {
      '@type': 'WebSite',
      name: config.siteName,
      url: config.productionUrl
    },
    publisher: generateOrganizationData(),
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0]
  };
};

/**
 * Generate BreadcrumbList structured data
 * @param {Array} items - Array of breadcrumb items with name and url properties
 * @returns {Object} - BreadcrumbList structured data
 */
export const generateBreadcrumbData = (items) => {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${config.productionUrl}${item.url}`
    }))
  };
};

/**
 * Generate LocalBusiness structured data
 * @returns {Object} - LocalBusiness structured data
 */
export const generateLocalBusinessData = () => {
  return {
    '@type': 'ProfessionalService',
    name: config.siteName,
    description: config.siteDescription,
    url: config.productionUrl,
    logo: `${config.productionUrl}/images/logo.png`,
    image: `${config.productionUrl}/images/building.jpg`,
    telephone: '+1-123-456-7890',
    email: 'info@jethrosolutions.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://twitter.com/jethrosolutions',
      'https://facebook.com/jethrosolutions',
      'https://linkedin.com/company/jethrosolutions',
      'https://github.com/jethrosolutions'
    ]
  };
};

/**
 * Generate Article structured data
 * @param {Object} article - Article data
 * @returns {Object} - Article structured data
 */
export const generateArticleData = (article) => {
  return {
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl ? `${config.productionUrl}${article.imageUrl}` : undefined,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: generateOrganizationData(),
    datePublished: article.publishDate,
    dateModified: article.modifiedDate || article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${config.productionUrl}${article.url}`
    }
  };
};

/**
 * Generate FAQ structured data
 * @param {Array} items - Array of FAQ items with question and answer properties
 * @returns {Object} - FAQPage structured data
 */
export const generateFAQData = (items) => {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}; 