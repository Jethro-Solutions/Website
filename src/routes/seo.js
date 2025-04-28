import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { 
  generateSitemap, 
  saveSitemap, 
  generateRobotsTxt,
  saveRobotsTxt
} from '../utils/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

// Define main site routes for sitemap
const siteRoutes = [
  { path: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '1.0' },
  { path: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  { path: '/services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.8' },
  { path: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
  { path: '/portfolio', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.9' },
  { path: '/blog', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.9' }
];

/**
 * Generate and serve sitemap.xml
 */
router.get('/sitemap.xml', (req, res) => {
  try {
    const publicDir = path.join(__dirname, '../../public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    // Check if sitemap.xml exists and is not older than 1 day
    if (fs.existsSync(sitemapPath)) {
      const stats = fs.statSync(sitemapPath);
      const fileDateInMs = new Date(stats.mtime).getTime();
      const oneDayInMs = 24 * 60 * 60 * 1000;

      if (Date.now() - fileDateInMs < oneDayInMs) {
        return res.sendFile(sitemapPath);
      }
    }

    // Generate new sitemap
    const sitemap = generateSitemap(siteRoutes);
    saveSitemap(sitemap);
    
    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});

/**
 * Generate and serve robots.txt
 */
router.get('/robots.txt', (req, res) => {
  try {
    const publicDir = path.join(__dirname, '../../public');
    const robotsPath = path.join(publicDir, 'robots.txt');

    // Check if robots.txt exists
    if (fs.existsSync(robotsPath)) {
      return res.sendFile(robotsPath);
    }

    // Generate new robots.txt
    const robotsTxt = generateRobotsTxt();
    saveRobotsTxt(robotsTxt);
    
    res.header('Content-Type', 'text/plain');
    res.send(robotsTxt);
  } catch (error) {
    console.error('Error generating robots.txt:', error);
    res.status(500).send('Error generating robots.txt');
  }
});

export default router; 