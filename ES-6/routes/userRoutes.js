'use strict';

import express from 'express';
import { getAllUsers, getUsers, addUser, updateUser, deleteUser } from '../controllers/userController.js';
const router = express.Router();

router.get('/getall', getAllUsers);
router.post('/get/:id', getUsers);
router.post('/add', addUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;