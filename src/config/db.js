import mongoose from 'mongoose';
import { config } from './config.js';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      // Connection options
      maxPoolSize: 10,
      minPoolSize: 5,
      // Timeout settings
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
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