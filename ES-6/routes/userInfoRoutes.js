'use strict';

import express from 'express';
import { getInfoUser, getByIdInfoUser, addUserInfo, updateInfoUser, deleteInfoUser } from '../controllers/userInfoController.js';

const router = express.Router();

router.get('/getuser', getInfoUser);
router.post('/get/:id', getByIdInfoUser);
router.post('/add', addUserInfo);
router.put('/update/:id', updateInfoUser);
router.delete('/delete/:id', deleteInfoUser);

export default router;