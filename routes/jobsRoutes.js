'use strict';

const express = require('express');
// const jobsControll = require('../controllers/jobsController');
const { getAllJobs, getjob, addJobs, jobUpdate, jobsDelete } = require('../controllers/jobsController');
const router = express.Router();

router.get('/getjob', getAllJobs);
router.post('/getbyid/:id', getjob);
router.post('/post', addJobs);
router.put('/update/:id', jobUpdate);
router.delete('/delete/:id', jobsDelete);

module.exports = {
    routes: router
};