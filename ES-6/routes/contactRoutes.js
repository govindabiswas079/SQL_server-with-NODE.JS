'use strict';

import express from 'express';
import { getAllContact, contactId, addContact, updateId, deleteContact } from '../controllers/contactController.js';
const router = express.Router();

router.get('/getall', getAllContact);
router.get('/get/:id', contactId);
router.post('/add', addContact);
router.put('/update/:id', updateId);
router.delete('/delete/:id', deleteContact);

export default router;