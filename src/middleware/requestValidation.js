const validator = require('validator');

// Sanitize and validate request data
exports.validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      // Deep clone the request body to avoid modifying the original
      const sanitizedBody = JSON.parse(JSON.stringify(req.body));

      // Sanitize each field
      Object.keys(sanitizedBody).forEach(key => {
        if (typeof sanitizedBody[key] === 'string') {
          // Escape HTML
          sanitizedBody[key] = validator.escape(sanitizedBody[key]);
          // Remove any script tags
          sanitizedBody[key] = sanitizedBody[key].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
          // Normalize email addresses
          if (validator.isEmail(sanitizedBody[key])) {
            sanitizedBody[key] = validator.normalizeEmail(sanitizedBody[key]);
          }
        }
      });

      // Validate against schema
      const { error } = schema.validate(sanitizedBody);
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.details[0].message
        });
      }

      // Replace request body with sanitized version
      req.body = sanitizedBody;
      next();
    } catch (error) {
      next(error);
    }
  };
};

// Validate query parameters
exports.validateQuery = (schema) => {
  return (req, res, next) => {
    try {
      const sanitizedQuery = {};
      
      // Sanitize query parameters
      Object.keys(req.query).forEach(key => {
        if (typeof req.query[key] === 'string') {
          sanitizedQuery[key] = validator.escape(req.query[key]);
        } else {
          sanitizedQuery[key] = req.query[key];
        }
      });

      // Validate against schema
      const { error } = schema.validate(sanitizedQuery);
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.details[0].message
        });
      }

      // Replace query with sanitized version
      req.query = sanitizedQuery;
      next();
    } catch (error) {
      next(error);
    }
  };
};

// Validate URL parameters
exports.validateParams = (schema) => {
  return (req, res, next) => {
    try {
      const sanitizedParams = {};
      
      // Sanitize URL parameters
      Object.keys(req.params).forEach(key => {
        if (typeof req.params[key] === 'string') {
          sanitizedParams[key] = validator.escape(req.params[key]);
        } else {
          sanitizedParams[key] = req.params[key];
        }
      });

      // Validate against schema
      const { error } = schema.validate(sanitizedParams);
      if (error) {
        return res.status(400).json({
          success: false,
          error: error.details[0].message
        });
      }

      // Replace params with sanitized version
      req.params = sanitizedParams;
      next();
    } catch (error) {
      next(error);
    }
  };
}; 