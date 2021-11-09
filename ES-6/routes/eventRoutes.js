'use strict';

import express from 'express';
import { getAllEvents, getEvent, addEvent, updatEvent, deleteEvent } from '../controllers/eventController.js';
const router = express.Router();

router.get('/getpost', getAllEvents);
router.post('/get/:id', getEvent);
router.post('/add', addEvent);
router.put('/update/:id', updatEvent);
router.delete('/delete/:id', deleteEvent);

export default router;