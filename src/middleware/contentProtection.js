const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

// Protect against content scraping
exports.contentProtection = (req, res, next) => {
  // Add headers to prevent content scraping
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Cache control for product images
  if (req.path.includes('/images/')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
  
  next();
};

// Rate limiting for product API endpoints
exports.productRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
  skipFailedRequests: true
});

// Slow down repeated requests to product endpoints
exports.productSlowDown = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 50, // allow 50 requests per 15 minutes, then...
  delayMs: 500 // begin adding 500ms of delay per request
});

// Protect against hotlinking
exports.hotlinkProtection = (req, res, next) => {
  const referer = req.get('referer');
  if (referer && !referer.includes(req.hostname)) {
    return res.status(403).json({
      success: false,
      error: 'Hotlinking not allowed'
    });
  }
  next();
}; 