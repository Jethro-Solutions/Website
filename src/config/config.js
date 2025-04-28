import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpire: process.env.JWT_EXPIRE || '30d',
  productionUrl: process.env.PRODUCTION_URL || 'https://jethrosolutions.com',
  siteName: 'Jethro Solutions',
  siteDescription: 'Modern Web Development Services',
  locale: 'en_US',
  twitterHandle: '@jethrosolutions',
  analytics: {
    gaId: process.env.GA_MEASUREMENT_ID || '',
    gtmId: process.env.GTM_CONTAINER_ID || ''
  }
}; 