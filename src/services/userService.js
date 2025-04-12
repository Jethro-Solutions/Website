import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

class UserService {
  async registerUser(userData) {
    try {
      const user = await User.create(userData);
      const token = user.getSignedJwtToken();
      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email }).select('+password');
      
      if (!user) {
        throw new Error('Invalid credentials');
      }

      const isMatch = await user.matchPassword(password);
      
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      const token = user.getSignedJwtToken();
      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id, updateData) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      // If password is being updated, hash it
      if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
      }

      const updatedUser = await User.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
      });

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService(); 