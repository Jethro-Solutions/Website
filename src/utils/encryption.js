import crypto from 'crypto';
import { config } from '../config/config.js';

// Generate a secure encryption key from the JWT secret
const encryptionKey = crypto.scryptSync(config.jwtSecret, 'salt', 32);

class EncryptionService {
  static encrypt(text) {
    try {
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey, iv);
      let encrypted = cipher.update(text, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      const authTag = cipher.getAuthTag();
      return {
        iv: iv.toString('hex'),
        encryptedData: encrypted,
        authTag: authTag.toString('hex')
      };
    } catch (error) {
      throw new Error('Encryption failed');
    }
  }

  static decrypt(encryptedData) {
    try {
      const decipher = crypto.createDecipheriv(
        'aes-256-gcm',
        encryptionKey,
        Buffer.from(encryptedData.iv, 'hex')
      );
      decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
      let decrypted = decipher.update(encryptedData.encryptedData, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (error) {
      throw new Error('Decryption failed');
    }
  }
}

export default EncryptionService; 