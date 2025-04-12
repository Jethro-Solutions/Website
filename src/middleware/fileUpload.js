const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Secure file upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../temp/uploads'));
  },
  filename: (req, file, cb) => {
    // Generate random filename
    crypto.randomBytes(16, (err, raw) => {
      if (err) return cb(err);
      
      // Add timestamp to prevent name collisions
      cb(null, `${Date.now()}-${raw.toString('hex')}${path.extname(file.originalname)}`);
    });
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  // Allowed file types
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Invalid file type'), false);
  }

  // Check file size (max 5MB)
  if (req.headers['content-length'] > 5 * 1024 * 1024) {
    return cb(new Error('File too large'), false);
  }

  // Validate file name
  if (file.originalname.match(/^[a-zA-Z0-9-_. ]+$/)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid filename'), false);
  }
};

// Virus scanning (mock implementation - replace with actual virus scanning)
const scanFile = (filePath) => {
  return new Promise((resolve, reject) => {
    // Implement actual virus scanning here
    setTimeout(() => resolve(true), 1000);
  });
};

// Create upload middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 1 // Only allow 1 file at a time
  }
});

// Secure file upload middleware
exports.secureUpload = (fieldName) => {
  return async (req, res, next) => {
    try {
      // Handle file upload
      upload.single(fieldName)(req, res, async (err) => {
        if (err) {
          return res.status(400).json({
            success: false,
            error: err.message
          });
        }

        if (!req.file) {
          return res.status(400).json({
            success: false,
            error: 'No file uploaded'
          });
        }

        try {
          // Scan file for viruses
          await scanFile(req.file.path);
          
          next();
        } catch (error) {
          // Delete file if virus scan fails
          require('fs').unlinkSync(req.file.path);
          
          res.status(400).json({
            success: false,
            error: 'File failed security check'
          });
        }
      });
    } catch (error) {
      next(error);
    }
  };
}; 