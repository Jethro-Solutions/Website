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