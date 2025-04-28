import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

// Protect against content scraping
export const contentProtection = (req, res, next) => {
  // Add headers to prevent content scraping
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Cache control for images - optimized for Netlify CDN
  if (req.path.includes('/images/')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    // Add Netlify CDN compatibility
    res.setHeader('X-Netlify-Cache', 'Miss');
  }
  
  next();
};

// Rate limiting for product API endpoints - optimized for Netlify functions
export const productRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
  skipFailedRequests: true,
  keyGenerator: (req) => {
    // Use Netlify-compatible IP detection
    return req.headers['x-nf-client-connection-ip'] || 
           req.headers['client-ip'] ||
           req.headers['x-forwarded-for'] || 
           req.socket.remoteAddress || 
           req.ip;
  }
});

// Slow down repeated requests to product endpoints
export const productSlowDown = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // allow 50 requests per 15 minutes, then...
  delayMs: 500, // begin adding 500ms of delay per request
  keyGenerator: (req) => {
    // Use Netlify-compatible IP detection
    return req.headers['x-nf-client-connection-ip'] || 
           req.headers['client-ip'] ||
           req.headers['x-forwarded-for'] || 
           req.socket.remoteAddress || 
           req.ip;
  }
});

// Protect against hotlinking - optimized for Netlify
export const hotlinkProtection = (req, res, next) => {
  const referer = req.get('referer');
  const allowedDomains = [req.hostname, 'jethrosolutions.com', 'www.jethrosolutions.com', 'jethrosolutions.netlify.app'];
  
  if (referer && !allowedDomains.some(domain => referer.includes(domain))) {
    return res.status(403).json({
      success: false,
      error: 'Hotlinking not allowed'
    });
  }
  next();
}; 