'use strict';

const express = require('express');
// const contactControll = require('../controllers/contactController');
const { getAllContact, contactId, addContact, updateId, deleteContact } = require('../controllers/contactController');
const router = express.Router();

router.get('/getall', getAllContact);
router.post('/get/:id', contactId);
router.post('/add', addContact);
router.put('/update/:id', updateId);
router.delete('/delete/:id', deleteContact);


module.exports = {
    routes: router
};