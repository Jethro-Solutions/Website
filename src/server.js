import express from 'express';
import { config } from './config/config.js';
import { connectDB } from './config/db.js';
import { setupSecurity } from './middleware/security.js';
import { accessLogger, errorLogger, developmentLogger } from './middleware/logger.js';
import { validateRegister, validateContact } from './middleware/validation.js';
import { seoMiddleware } from './middleware/seo.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import contactRoutes from './routes/contact.js';
import seoRoutes from './routes/seo.js';
import pageRoutes from './routes/pages.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Initialize MongoDB connection only if not already connected
// This is important for serverless environments to avoid multiple connections
let isConnected = false;
const startDb = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};
startDb();

// Security middleware
setupSecurity(app);

// Logging middleware
if (config.env === 'development') {
  app.use(developmentLogger);
} else {
  app.use(accessLogger);
  app.use(errorLogger);
}

// Body parser
app.use(express.json({ limit: '10kb' })); // Limit payload size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Set up SEO middleware
app.use(seoMiddleware());

// Create directories if they don't exist
// Note: In Vercel, this won't persist between requests, but it's
// included for local development compatibility
const ensureDirectoriesExist = () => {
  try {
    const viewsDir = path.join(__dirname, 'views');
    if (!fs.existsSync(viewsDir)) {
      fs.mkdirSync(viewsDir, { recursive: true });
    }

    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const imagesDir = path.join(publicDir, 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating directories:', error);
  }
};

ensureDirectoriesExist();

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

// SEO routes (sitemap, robots.txt)
app.use('/', seoRoutes);

// Page routes (server-rendered pages with SEO)
app.use('/', pageRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// API documentation route
app.get('/api/docs', (req, res) => {
  res.redirect('/api-docs');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
});

// Only listen directly when not being imported as a module
// This is important for Vercel deployment where we export the app
if (process.env.NODE_ENV !== 'production') {
  const PORT = config.port || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${config.env} mode on port ${PORT}`);
  });
}

// Export the app for Vercel serverless functions
export default app; 