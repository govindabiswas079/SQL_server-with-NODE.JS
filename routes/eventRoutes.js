'use strict';

const express = require('express');
// const eventControll = require('../controllers/eventController');
const { getAllEvents, getEvent, addEvent, updatEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.get('/getpost', getAllEvents);
router.post('/get/:id', getEvent);
router.post('/add', addEvent);
router.put('/update/:id', updatEvent);
router.delete('/delete/:id', deleteEvent);


module.exports = {
    routes: router
};