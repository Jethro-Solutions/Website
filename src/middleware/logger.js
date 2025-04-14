import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from '../config/config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create logs directory if it doesn't exist
const logsDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create a write stream for access logs
const accessLogStream = fs.createWriteStream(
  path.join(logsDir, 'access.log'),
  { flags: 'a' }
);

// Create a write stream for error logs
const errorLogStream = fs.createWriteStream(
  path.join(logsDir, 'error.log'),
  { flags: 'a' }
);

// Custom token for logging IP address
morgan.token('remote-addr', (req) => {
  return req.headers['x-forwarded-for'] || 
         req.connection.remoteAddress;
});

// Custom token for user ID (if authenticated)
morgan.token('user-id', (req) => {
  return req.user ? req.user.id : 'anonymous';
});

// Custom format for access logs
const accessFormat = ':remote-addr - :user-id [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

// Custom format for error logs
const errorFormat = ':remote-addr - :user-id [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms';

// Setup morgan for access logging
export const accessLogger = morgan(accessFormat, {
  stream: accessLogStream,
  skip: (req, res) => res.statusCode >= 400
});

// Setup morgan for error logging
export const errorLogger = morgan(errorFormat, {
  stream: errorLogStream,
  skip: (req, res) => res.statusCode < 400
});

// Development console logging
export const developmentLogger = morgan('dev', {
  skip: (req, res) => config.env !== 'development'
}); 