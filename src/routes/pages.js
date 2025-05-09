/**
 * Page Routes
 * Routes for server-rendered pages with SEO integration
 */
import express from 'express';
import { renderPage } from '../utils/renderer.js';
import { 
  config, 
  generateWebPageData,
  generateOrganizationData,
  generateLocalBusinessData,
  generateBreadcrumbData,
  generateFAQData
} from '../utils/seo.js';

const router = express.Router();

/**
 * Home page route
 */
router.get('/', async (req, res) => {
  // Define breadcrumbs for home page
  const breadcrumbs = [
    { name: 'Home', url: '/' }
  ];
  
  // Define FAQ items for home page
  const faqItems = [
    {
      question: 'What services does Jethro Solutions offer?',
      answer: 'We offer web development, mobile app development, UI/UX design, and cloud solutions.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'The timeline varies depending on the complexity of the project, but typical websites take 4-8 weeks from start to finish.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, we offer ongoing maintenance and support packages for all our web and mobile applications.'
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern frameworks like React, Node.js, Next.js, and Vue.js, along with cloud platforms like AWS and Azure.'
    }
  ];
  
  // Define meta information for the home page
  const meta = {
    title: `${config.siteName} - Modern Web Development`,
    description: 'Jethro Solutions builds modern web applications with cutting-edge technologies. Our expert team delivers exceptional user experiences through innovative solutions.',
    keywords: 'web development, mobile apps, UI/UX design, React, Node.js, Next.js, cloud solutions',
    ogType: 'website',
    ogImage: '/images/home-social-share.jpg',
    structuredData: {
      type: 'WebSite',
      data: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: config.siteName,
        url: config.productionUrl,
        potentialAction: {
          '@type': 'SearchAction',
          'target': `${config.productionUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        },
        // Add additional structured data
        copyrightYear: new Date().getFullYear(),
        author: {
          '@type': 'Organization',
          name: config.siteName
        },
        // Include Organization data
        publisher: generateOrganizationData(),
        // Include Local Business data
        mainEntity: generateLocalBusinessData(),
        // Include FAQ data
        mainEntityOfPage: generateFAQData(faqItems)
      }
    },
    // Add alternate languages for internationalization
    alternateLanguages: [
      { code: 'es', url: `${config.productionUrl}/es` },
      { code: 'fr', url: `${config.productionUrl}/fr` }
    ]
  };

  // Sample featured projects for homepage
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with inventory management.',
      image: '/images/projects/ecommerce.jpg',
      url: '/portfolio/ecommerce-platform'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Real-time analytics dashboard for healthcare providers.',
      image: '/images/projects/healthcare.jpg',
      url: '/portfolio/healthcare-dashboard'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application.',
      image: '/images/projects/banking.jpg',
      url: '/portfolio/mobile-banking'
    }
  ];

  // Prepare the content with enhanced structure and semantic HTML
  const content = `
    <section class="hero">
      <div class="container">
        <h1>Modern Web Solutions for Growing Businesses</h1>
        <p class="lead">We build exceptional digital experiences that transform businesses and delight users.</p>
        <div class="cta-buttons">
          <a href="/contact" class="btn btn-primary">Get in Touch</a>
          <a href="/services" class="btn btn-secondary">Explore Services</a>
        </div>
      </div>
    </section>
    
    <section class="services">
      <div class="container">
        <h2>Our Services</h2>
        <p class="section-subtitle">Comprehensive solutions for your digital needs</p>
        
        <div class="service-grid">
          <article class="service-card">
            <div class="service-icon"><img src="/images/icons/web-dev.svg" alt="Web Development Icon" width="64" height="64"></div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern frameworks and best practices.</p>
            <a href="/services/web-development" class="read-more">Learn more</a>
          </article>
          
          <article class="service-card">
            <div class="service-icon"><img src="/images/icons/mobile-dev.svg" alt="Mobile Development Icon" width="64" height="64"></div>
            <h3>Mobile Development</h3>
            <p>Cross-platform mobile applications that work seamlessly on iOS and Android.</p>
            <a href="/services/mobile-development" class="read-more">Learn more</a>
          </article>
          
          <article class="service-card">
            <div class="service-icon"><img src="/images/icons/ui-ux.svg" alt="UI/UX Design Icon" width="64" height="64"></div>
            <h3>UI/UX Design</h3>
            <p>User-centered design that creates intuitive and engaging experiences.</p>
            <a href="/services/ui-ux-design" class="read-more">Learn more</a>
          </article>
          
          <article class="service-card">
            <div class="service-icon"><img src="/images/icons/cloud.svg" alt="Cloud Solutions Icon" width="64" height="64"></div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure that grows with your business needs.</p>
            <a href="/services/cloud-solutions" class="read-more">Learn more</a>
          </article>
        </div>
      </div>
    </section>
    
    <section class="featured-work">
      <div class="container">
        <h2>Featured Projects</h2>
        <p class="section-subtitle">See what we've built for our clients</p>
        
        <div class="project-grid">
          ${featuredProjects.map(project => `
            <article class="project-card">
              <img src="${project.image}" alt="${project.title}" class="project-image" width="350" height="200">
              <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.url}" class="btn btn-outline">View Project</a>
              </div>
            </article>
          `).join('')}
        </div>
        
        <div class="view-all-projects">
          <a href="/portfolio" class="btn btn-primary">View All Projects</a>
        </div>
      </div>
    </section>
    
    <section class="testimonials">
      <div class="container">
        <h2>What Our Clients Say</h2>
        <p class="section-subtitle">Trusted by businesses worldwide</p>
        
        <div class="testimonial-slider">
          <blockquote class="testimonial">
            <p>"Jethro Solutions transformed our business with a cutting-edge web application that streamlined our operations and delighted our customers."</p>
            <cite>
              <span class="client-name">Sarah Johnson</span>
              <span class="client-position">CEO, TechCorp</span>
            </cite>
          </blockquote>
          
          <blockquote class="testimonial">
            <p>"The team at Jethro Solutions delivered our project on time and exceeded our expectations. Their attention to detail and technical expertise is unmatched."</p>
            <cite>
              <span class="client-name">Mark Williams</span>
              <span class="client-position">CTO, FinanceHub</span>
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
    
    <section class="faq">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <p class="section-subtitle">Answers to common questions</p>
        
        <div class="faq-list">
          ${faqItems.map((item, index) => `
            <details class="faq-item" ${index === 0 ? 'open' : ''}>
              <summary class="faq-question">${item.question}</summary>
              <div class="faq-answer">
                <p>${item.answer}</p>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
    
    <section class="cta">
      <div class="container">
        <h2>Ready to Start Your Project?</h2>
        <p>Contact us today for a free consultation and quote.</p>
        <a href="/contact" class="btn btn-primary btn-large">Get in Touch</a>
      </div>
    </section>
  `;

  // Render the page with all our enhanced SEO features
  await renderPage(req, res, 'template', { content }, meta, breadcrumbs);
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
          email: 'jethrofounders@gmail.com',
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
          <p><strong>Email:</strong> jethrofounders@gmail.com</p>
        </div>
      </div>
    </section>
  `;

  await renderPage(req, res, 'template', { content }, meta);
});

export default router; 