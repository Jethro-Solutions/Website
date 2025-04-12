const Joi = require('joi');

// Contact validation schema
exports.validateContact = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().max(50),
    email: Joi.string().required().email(),
    phone: Joi.string().max(20),
    message: Joi.string().required().max(500),
    company: Joi.string().max(100),
    status: Joi.string().valid('new', 'read', 'contacted', 'closed')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      error: error.details[0].message
    });
  }
  next();
};

// User validation schema
exports.validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid('user', 'admin')
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      error: error.details[0].message
    });
  }
  next();
}; 