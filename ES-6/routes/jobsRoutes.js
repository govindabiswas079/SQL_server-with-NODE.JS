'use strict';

import express from 'express';
import { getAllJobs, getjob, addJobs, jobUpdate, jobsDelete } from '../controllers/jobsController.js';
const router = express.Router();

router.get('/getjob', getAllJobs);
router.post('/getbyid/:id', getjob);
router.post('/post', addJobs);
router.put('/update/:id', jobUpdate);
router.delete('/delete/:id', jobsDelete);

export default router;