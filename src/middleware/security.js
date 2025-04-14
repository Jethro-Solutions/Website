import hpp from 'hpp';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import slowDown from 'express-slow-down';
import { corsMiddleware } from './cors.js';
import { config } from '../config/config.js';

// Security middleware setup
export const setupSecurity = (app) => {
  // Enable CORS with specific configuration
  app.use(corsMiddleware);

  // Basic security headers
  app.use(helmet());

  // Strict Transport Security
  app.use(helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }));

  // Content Security Policy
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  }));

  // Prevent parameter pollution
  app.use(hpp());

  // Global rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true,
    legacyHeaders: false
  });

  // Apply rate limiting to all routes
  app.use(limiter);

  // Specific rate limit for login attempts
  const loginLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // limit each IP to 5 login requests per hour
    message: 'Too many login attempts, please try again later',
    standardHeaders: true,
    legacyHeaders: false
  });

  // Apply login rate limiting
  app.use('/api/auth/login', loginLimiter);

  // Speed Limiter
  const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 50, // allow 50 requests per 15 minutes, then...
    delayMs: () => 500, // add 500ms of delay per request above limit
    validate: { delayMs: false } // disable the warning about delayMs
  });

  app.use(speedLimiter);

  // Disable X-Powered-By header
  app.disable('x-powered-by');

  // Add security headers
  app.use((req, res, next) => {
    // Basic security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Permissions policy
    res.setHeader('Permissions-Policy', 
      'geolocation=(), microphone=(), camera=(), payment=(), usb=(), ' +
      'magnetometer=(), accelerometer=(), gyroscope=(), ' +
      'ambient-light-sensor=(), encrypted-media=()');
    
    // Additional security headers
    res.setHeader('X-DNS-Prefetch-Control', 'on');
    res.setHeader('X-Download-Options', 'noopen');
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
    
    if (config.env === 'production') {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }
    
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