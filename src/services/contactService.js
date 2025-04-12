import Contact from '../models/Contact.js';
import EncryptionService from '../utils/encryption.js';

class ContactService {
  async createContact(contactData) {
    try {
      const contact = await Contact.create(contactData);
      return this.decryptContactData(contact);
    } catch (error) {
      throw error;
    }
  }

  async getAllContacts() {
    try {
      const contacts = await Contact.find().sort('-createdAt');
      return contacts.map(contact => this.decryptContactData(contact));
    } catch (error) {
      throw error;
    }
  }

  async getContactById(id) {
    try {
      const contact = await Contact.findById(id);
      if (!contact) {
        throw new Error('Contact not found');
      }
      return this.decryptContactData(contact);
    } catch (error) {
      throw error;
    }
  }

  async updateContact(id, updateData) {
    try {
      const contact = await Contact.findById(id);
      if (!contact) {
        throw new Error('Contact not found');
      }

      const updatedContact = await Contact.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true
      });

      return this.decryptContactData(updatedContact);
    } catch (error) {
      throw error;
    }
  }

  async deleteContact(id) {
    return await Contact.findByIdAndDelete(id);
  }

  // Helper method to decrypt contact data
  decryptContactData(contact) {
    const decryptedData = contact.getDecryptedData();
    if (decryptedData) {
      return {
        ...contact.toObject(),
        ...decryptedData
      };
    }
    return contact;
  }
}

export default new ContactService(); 