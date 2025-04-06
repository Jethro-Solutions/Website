const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const config = require('./config/config');
const swaggerSetup = require('./utils/swagger');

// Connect to database
connectDB();

// Route files
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (config.env === 'development') {
  app.use(morgan('dev'));
}

// Security middleware
app.use(cors());
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Mount routers
app.use('/api/contacts', contactRoutes);
app.use('/api/auth', authRoutes);

// Set up Swagger documentation
swaggerSetup(app);

// Base route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Jethro Solutions API' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = config.port;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${config.env} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});

module.exports = server; // For testing 