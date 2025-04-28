/**
 * Page Routes
 * Routes for server-rendered pages with SEO integration
 */
import express from 'express';
import { renderPage } from '../utils/renderer.js';
import { config } from '../config/config.js';

const router = express.Router();

/**
 * Home page route
 */
router.get('/', async (req, res) => {
  const meta = {
    title: `${config.siteName} - Modern Web Development`,
    description: 'Welcome to Jethro Solutions - we build modern web applications with the latest technologies.',
    ogType: 'website',
    structuredData: {
      type: 'WebSite',
      data: {
        name: config.siteName,
        url: config.productionUrl,
        potentialAction: {
          '@type': 'SearchAction',
          'target': `${config.productionUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    }
  };

  const content = `
    <section class="hero">
      <h1>Welcome to Jethro Solutions</h1>
      <p>We build modern web applications that deliver exceptional user experiences.</p>
      <a href="/contact" class="btn btn-primary">Get in Touch</a>
    </section>
    
    <section class="services">
      <h2>Our Services</h2>
      <div class="service-grid">
        <div class="service-card">
          <h3>Web Development</h3>
          <p>Custom web applications built with modern frameworks and best practices.</p>
        </div>
        <div class="service-card">
          <h3>Mobile Development</h3>
          <p>Cross-platform mobile applications that work on iOS and Android.</p>
        </div>
        <div class="service-card">
          <h3>UI/UX Design</h3>
          <p>User-centered design that creates intuitive and engaging experiences.</p>
        </div>
      </div>
    </section>
  `;

  await renderPage(req, res, 'template', { content }, meta);
});

/**
 * About page route
 */
router.get('/about', async (req, res) => {
  const meta = {
    title: `About Us | ${config.siteName}`,
    description: 'Learn about Jethro Solutions - our team, mission, and values.',
    ogType: 'website',
    structuredData: {
      type: 'Organization',
      data: {
        name: config.siteName,
        url: config.productionUrl,
        logo: `${config.productionUrl}/images/logo.png`,
        sameAs: [
          'https://twitter.com/jethrosolutions',
          'https://linkedin.com/company/jethrosolutions',
          'https://github.com/jethrosolutions'
        ]
      }
    }
  };

  const content = `
    <section class="about">
      <h1>About Jethro Solutions</h1>
      <p>We are a team of passionate developers dedicated to building exceptional web experiences.</p>
      
      <h2>Our Mission</h2>
      <p>To help businesses succeed in the digital world through innovative technology solutions.</p>
      
      <h2>Our Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="/images/team/john.jpg" alt="John Doe">
          <h3>John Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div class="team-member">
          <img src="/images/team/jane.jpg" alt="Jane Smith">
          <h3>Jane Smith</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </section>
  `;

  await renderPage(req, res, 'template', { content }, meta);
});

/**
 * Contact page route
 */
router.get('/contact', async (req, res) => {
  const meta = {
    title: `Contact Us | ${config.siteName}`,
    description: 'Get in touch with Jethro Solutions for your web development needs.',
    ogType: 'website',
    structuredData: {
      type: 'ContactPage',
      data: {
        name: `Contact | ${config.siteName}`,
        url: `${config.productionUrl}/contact`,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-123-456-7890',
          email: 'info@jethrosolutions.com',
          contactType: 'customer service'
        }
      }
    }
  };

  const content = `
    <section class="contact">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
      
      <div class="contact-container">
        <form class="contact-form" action="/api/contact" method="POST">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
        
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> info@jethrosolutions.com</p>
          <p><strong>Phone:</strong> +1-123-456-7890</p>
          <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94103</p>
        </div>
      </div>
    </section>
  `;

  await renderPage(req, res, 'template', { content }, meta);
});

export default router; 