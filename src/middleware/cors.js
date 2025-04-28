import cors from 'cors';
import { config } from '../config/config.js';

const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:8082',
  'http://localhost:8083',
  // Production domains
  'https://jethrosolutions.com',
  'https://www.jethrosolutions.com',
  // Netlify domains
  'https://jethrosolutions.netlify.app',
  'https://jethro-solutions.netlify.app'
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || (config.env === 'development' && !origin)) {
      return callback(null, true);
    }
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS policy violation'), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'X-Netlify-Cache',
    'Netlify-CDN-Cache-Control'
  ],
  exposedHeaders: ['Content-Range', 'X-Content-Range', 'X-Netlify-Cache'],
  credentials: true,
  maxAge: 86400, // 24 hours
  preflightContinue: false,
  optionsSuccessStatus: 204
};

export const corsMiddleware = cors(corsOptions); 