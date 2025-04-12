import mongoose from 'mongoose';
import { config } from './config.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Security options
      ssl: process.env.NODE_ENV === 'production',
      sslValidate: process.env.NODE_ENV === 'production',
      // Connection options
      maxPoolSize: 10,
      minPoolSize: 5,
      // Timeout settings
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      // Authentication
      authSource: 'admin',
      // Retry settings
      retryWrites: true,
      retryReads: true
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
}; 