import * as contactService from '../services/contactService.js';
import Contact from '../models/Contact.js';

// @desc    Create new contact submission
// @route   POST /api/contacts
// @access  Public
export const createContact = async (req, res, next) => {
  try {
    const contact = await contactService.createContact(req.body);

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Private
export const getContacts = async (req, res, next) => {
  try {
    const contacts = await contactService.getAllContacts();

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single contact
// @route   GET /api/contacts/:id
// @access  Private
export const getContact = async (req, res, next) => {
  try {
    const contact = await contactService.getContactById(req.params.id);

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update contact
// @route   PUT /api/contacts/:id
// @access  Private
export const updateContact = async (req, res, next) => {
  try {
    const contact = await contactService.updateContact(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Private
export const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
}; 