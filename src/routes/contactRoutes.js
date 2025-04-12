import express from 'express';
import {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact
} from '../controllers/contactController.js';

import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router
  .route('/')
  .post(createContact)
  .get(protect, authorize('admin'), getContacts);

router
  .route('/:id')
  .get(protect, authorize('admin'), getContact)
  .put(protect, authorize('admin'), updateContact)
  .delete(protect, authorize('admin'), deleteContact);

export { router }; 