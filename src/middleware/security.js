import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import slowDown from 'express-slow-down';
import { corsMiddleware } from './cors.js';
import { config } from '../config/config.js';

// Security middleware setup for Vercel deployment
export const setupSecurity = (app) => {
  // Enable CORS with specific configuration
  app.use(corsMiddleware);

  // Basic security with Helmet
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "*.vercel.app", "vercel.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:", "blob:"],
        connectSrc: ["'self'", "*.vercel.app", "vercel.com"],
        fontSrc: ["'self'", "https:"],
        objectSrc: ["'none'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'none'"],
        upgradeInsecureRequests: []
      }
    },
    crossOriginEmbedderPolicy: false, // Disabled for Vercel compatibility
    crossOriginOpenerPolicy: false // Disabled for Vercel compatibility
  }));

  // Prevent parameter pollution
  app.use(hpp());

  // Rate limiting adjusted for serverless
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true,
    legacyHeaders: false,
    // Optimized for serverless/Vercel
    skipSuccessfulRequests: false, // Only count successful requests
    skipFailedRequests: false, // Don't count failed requests
    keyGenerator: (req) => {
      // Use Vercel-specific headers if available
      return req.headers['x-forwarded-for'] || 
             req.headers['x-real-ip'] || 
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
    // Optimized for serverless/Vercel
    keyGenerator: (req) => {
      return req.headers['x-forwarded-for'] || 
             req.headers['x-real-ip'] || 
             req.socket.remoteAddress || 
             req.ip;
    }
  });

  // Apply login rate limiting
  app.use('/api/auth/login', loginLimiter);

  // Speed Limiter adjusted for serverless
  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // allow 50 requests per 15 minutes, then...
    delayMs: () => 500, // add 500ms of delay per request above limit
    // Optimized for serverless/Vercel
    keyGenerator: (req) => {
      return req.headers['x-forwarded-for'] || 
             req.headers['x-real-ip'] || 
             req.socket.remoteAddress || 
             req.ip;
    }
  });

  app.use(speedLimiter);

  // Disable X-Powered-By header
  app.disable('x-powered-by');

  // Simplified security headers for Vercel
  app.use((req, res, next) => {
    // Only add headers that don't conflict with Vercel's defaults
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
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