const jwt = require('jsonwebtoken');
const config = require('../config/config');
const crypto = require('crypto');

class TokenManager {
  constructor() {
    this.blacklistedTokens = new Set();
    this.tokenRotationInterval = 24 * 60 * 60 * 1000; // 24 hours
    this.lastRotation = Date.now();
  }

  // Generate a new JWT token
  generateToken(payload) {
    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.jwtExpire
    });
    return token;
  }

  // Verify a JWT token
  verifyToken(token) {
    if (this.blacklistedTokens.has(token)) {
      throw new Error('Token has been revoked');
    }
    return jwt.verify(token, config.jwtSecret);
  }

  // Blacklist a token
  blacklistToken(token) {
    this.blacklistedTokens.add(token);
  }

  // Rotate JWT secret
  rotateSecret() {
    if (Date.now() - this.lastRotation >= this.tokenRotationInterval) {
      config.jwtSecret = crypto.randomBytes(32).toString('hex');
      this.lastRotation = Date.now();
      this.blacklistedTokens.clear(); // Clear blacklist after rotation
    }
  }

  // Clean up expired blacklisted tokens
  cleanupBlacklist() {
    this.blacklistedTokens.forEach(token => {
      try {
        jwt.verify(token, config.jwtSecret);
      } catch (err) {
        this.blacklistedTokens.delete(token);
      }
    });
  }
}

module.exports = new TokenManager(); 