/**
 * Renderer Utilities
 * Handles HTML template rendering with SEO and analytics
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateMetaTags, generateJsonLd } from '../middleware/seo.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Generate breadcrumbs HTML
 * @param {Array} breadcrumbs - Array of breadcrumb items
 * @returns {string} - HTML string with breadcrumbs
 */
const generateBreadcrumbsHtml = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return '';
  
  const items = breadcrumbs.map((crumb, index) => {
    const isLast = index === breadcrumbs.length - 1;
    if (isLast) {
      return `<li class="breadcrumb-item active" aria-current="page">${crumb.name}</li>`;
    }
    return `<li class="breadcrumb-item"><a href="${crumb.url}">${crumb.name}</a></li>`;
  }).join('');
  
  return `
    <nav aria-label="breadcrumb" class="breadcrumb-container">
      <ol class="breadcrumb">
        ${items}
      </ol>
    </nav>
  `;
};

/**
 * Render HTML template with data
 * @param {string} templateName - Template file name
 * @param {Object} data - Data to inject into template
 * @param {Object} res - Express response object
 * @returns {string} - Rendered HTML
 */
export const renderTemplate = async (templateName, data = {}, res) => {
  try {
    const templatePath = path.join(__dirname, '../views', `${templateName}.html`);
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Get meta and analytics data from response locals
    const meta = res.locals.meta || {};
    const structuredData = res.locals.structuredData || '';
    const analyticsScripts = res.locals.analyticsScripts || '';
    const breadcrumbs = res.locals.breadcrumbs || [];
    const alternateLanguages = res.locals.alternateLanguages || [];
    
    // Generate breadcrumbs HTML
    const breadcrumbsHtml = generateBreadcrumbsHtml(breadcrumbs);
    
    // Replace template variables
    template = template
      .replace('{{metaTags}}', generateMetaTags(meta))
      .replace('{{structuredData}}', generateJsonLd(structuredData))
      .replace('{{analyticsScripts}}', analyticsScripts)
      .replace('{{year}}', new Date().getFullYear())
      .replace('{{content}}', data.content || '')
      .replace('{{breadcrumbs}}', breadcrumbsHtml);
    
    // Replace any other custom variables
    if (data) {
      Object.keys(data).forEach(key => {
        const regex = new RegExp(`{{${key}}}`, 'g');
        template = template.replace(regex, data[key] || '');
      });
    }
    
    return template;
  } catch (error) {
    console.error('Error rendering template:', error);
    throw error;
  }
};

/**
 * Render page with template
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {string} templateName - Template file name
 * @param {Object} data - Data to inject into template
 * @param {Object} meta - Meta tag data for this page
 * @param {Array} breadcrumbs - Breadcrumb items for this page
 */
export const renderPage = async (req, res, templateName, data = {}, meta = {}, breadcrumbs = []) => {
  try {
    // Set page-specific meta tags
    res.setMeta({
      ...meta,
      breadcrumbs: breadcrumbs
    });
    
    // Render the template
    const html = await renderTemplate(templateName, data, res);
    
    // Send the rendered HTML
    res.send(html);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error rendering page');
  }
}; 