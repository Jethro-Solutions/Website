import mongoose from 'mongoose';
import { config } from './config.js';

// Track the connection status
let isConnected = false;

export const connectDB = async () => {
  // Return if we're already connected
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  // If mongoose has active connections, use those
  if (mongoose.connections.length > 0) {
    const connection = mongoose.connections[0];
    if (connection.readyState === 1) {
      console.log('Using existing MongoDB connection');
      isConnected = true;
      return;
    }
    // If there's a connection but it's not ready, close it
    await mongoose.disconnect();
  }

  try {
    const conn = await mongoose.connect(config.mongoUri, {
      // Connection options optimized for serverless
      maxPoolSize: 10,
      minPoolSize: 1, // Reduced for serverless
      // Timeout settings - reduced for serverless
      connectTimeoutMS: 5000,
      socketTimeoutMS: 30000,
      // Retry settings
      retryWrites: true,
      retryReads: true,
      // Serverless optimizations
      serverSelectionTimeoutMS: 5000,
      heartbeatFrequencyMS: 10000,
      keepAlive: true,
      keepAliveInitialDelay: 300000
    });
    
    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events for better error recovery
    mongoose.connection.on('error', (err) => {
      console.error(`MongoDB connection error: ${err}`);
      isConnected = false;
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
      isConnected = false;
    });

    // Handle process termination
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to app termination');
      process.exit(0);
    });

  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    isConnected = false;
    // Don't exit process in serverless environment
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    }
  }
}; 