import mongoose from 'mongoose';
import EncryptionService from '../utils/encryption.js';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone number cannot be longer than 20 characters']
  },
  message: {
    type: String,
    required: [true, 'Please add a message'],
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  company: {
    type: String,
    maxlength: [100, 'Company name cannot be more than 100 characters']
  },
  status: {
    type: String,
    enum: ['new', 'read', 'contacted', 'closed'],
    default: 'new'
  },
  encryptedData: {
    type: Object,
    select: false // This field won't be returned by default
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Encrypt sensitive data before saving
ContactSchema.pre('save', function(next) {
  if (this.isModified('phone') || this.isModified('email') || this.isModified('message')) {
    const sensitiveData = {
      phone: this.phone,
      email: this.email,
      message: this.message
    };
    this.encryptedData = EncryptionService.encrypt(JSON.stringify(sensitiveData));
    // Clear the original fields
    this.phone = undefined;
    this.email = undefined;
    this.message = undefined;
  }
  next();
});

// Decrypt data when retrieving
ContactSchema.methods.getDecryptedData = function() {
  if (this.encryptedData) {
    const decrypted = EncryptionService.decrypt(this.encryptedData);
    return JSON.parse(decrypted);
  }
  return null;
};

export default mongoose.model('Contact', ContactSchema); 