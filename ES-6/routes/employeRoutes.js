'use strict';

import express from 'express';
import { getAllEmploye, getEmploye, addEmploye, employeUpdate, deleteEmploy } from '../controllers/employeController.js';
const router = express.Router();

router.get('/getemploye', getAllEmploye);
router.get('/get/:id', getEmploye);
router.post('/add', addEmploye);
router.put('/update/:id', employeUpdate);
router.delete('/delete/:id', deleteEmploy);

export default router;