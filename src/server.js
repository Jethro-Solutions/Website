import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { setupSecurity } from './middleware/security.js';
import { connectDB } from './config/db.js';
import { errorHandler } from './middleware/error.js';
import { config } from './config/config.js';
import { swaggerSetup } from './utils/swagger.js';

// Connect to database
connectDB();

// Route files
import { router as contactRoutes } from './routes/contactRoutes.js';
import { router as authRoutes } from './routes/authRoutes.js';

const app = express();

// Body parser
app.use(express.json({ limit: '10kb' })); // Limit payload size

// Security middleware
setupSecurity(app);

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Dev logging middleware
if (config.env === 'development') {
  app.use(morgan('dev'));
}

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

export default server; // For testing 