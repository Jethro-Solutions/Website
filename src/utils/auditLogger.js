const winston = require('winston');
const { createLogger, format, transports } = winston;
const path = require('path');

// Create a custom format for audit logs
const auditFormat = format.combine(
  format.timestamp(),
  format.json(),
  format.errors({ stack: true })
);

// Create the audit logger
const auditLogger = createLogger({
  format: auditFormat,
  transports: [
    new transports.File({
      filename: path.join(__dirname, '../logs/audit.log'),
      level: 'info',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      tailable: true
    })
  ]
});

class AuditLogger {
  static logSecurityEvent(event) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      event: event.type,
      userId: event.userId || 'anonymous',
      ip: event.ip,
      userAgent: event.userAgent,
      details: event.details
    };

    // Mask sensitive data
    if (logEntry.details && logEntry.details.password) {
      logEntry.details.password = '***MASKED***';
    }

    auditLogger.info('Security Event', logEntry);
  }

  static logDatabaseOperation(operation) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      operation: operation.type,
      collection: operation.collection,
      query: this.maskSensitiveData(operation.query),
      userId: operation.userId || 'system'
    };

    auditLogger.info('Database Operation', logEntry);
  }

  static maskSensitiveData(data) {
    if (!data) return data;
    
    const sensitiveFields = ['password', 'token', 'secret', 'key'];
    const maskedData = { ...data };
    
    sensitiveFields.forEach(field => {
      if (maskedData[field]) {
        maskedData[field] = '***MASKED***';
      }
    });
    
    return maskedData;
  }
}

module.exports = AuditLogger; 