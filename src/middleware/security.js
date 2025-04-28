import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import slowDown from 'express-slow-down';
import { corsMiddleware } from './cors.js';
import { config } from '../config/config.js';

// Security middleware setup for Netlify deployment
export const setupSecurity = (app) => {
  // Enable CORS with specific configuration
  app.use(corsMiddleware);

  // Basic security with Helmet
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "*.netlify.app", "netlify.app", "*.jethrosolutions.com", "jethrosolutions.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "*.netlify.app", "netlify.app", "*.jethrosolutions.com", "jethrosolutions.com"],
        fontSrc: ["'self'", "https:"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: []
      }
    },
    crossOriginEmbedderPolicy: false, // Needed for Netlify compatibility
    crossOriginOpenerPolicy: false // Needed for Netlify compatibility
  }));

  // Prevent parameter pollution
  app.use(hpp());

  // Rate limiting adjusted for Netlify functions
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
    // Optimized for Netlify functions
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
    keyGenerator: (req) => {
      return req.headers['x-nf-client-connection-ip'] || 
             req.headers['client-ip'] ||
             req.headers['x-forwarded-for'] || 
             req.socket.remoteAddress || 
             req.ip;
    }
  });

  // Apply rate limiting to all routes
  app.use(limiter);

  // Login rate limiting
  const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 login requests per hour
    message: 'Too many login attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
    // Optimized for Netlify functions
    keyGenerator: (req) => {
      return req.headers['x-nf-client-connection-ip'] || 
             req.headers['client-ip'] ||
             req.headers['x-forwarded-for'] || 
             req.socket.remoteAddress || 
             req.ip;
    }
  });

  // Apply login rate limiting
  app.use('/api/auth/login', loginLimiter);

  // Speed Limiter adjusted for Netlify functions
  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // allow 50 requests per 15 minutes, then...
    delayMs: () => 500, // add 500ms of delay per request above limit
    // Optimized for Netlify functions
    keyGenerator: (req) => {
      return req.headers['x-nf-client-connection-ip'] || 
             req.headers['client-ip'] ||
             req.headers['x-forwarded-for'] || 
             req.socket.remoteAddress || 
             req.ip;
    }
  });

  app.use(speedLimiter);

  // Disable X-Powered-By header
  app.disable('x-powered-by');

  // Security headers optimized for Netlify
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    next();
  });

  // Sanitize request data
  app.use((req, res, next) => {
    // Sanitize req.body
    if (req.body) {
      Object.keys(req.body).forEach(key => {
        if (typeof req.body[key] === 'string') {
          req.body[key] = req.body[key].trim();
        }
      });
    }
    next();
  });
};