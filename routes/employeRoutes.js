'use strict';

const express = require('express');
// const employeControll = require('../controllers/employeController');
const { getAllEmploye, getEmploye, addEmploye, employeUpdate, deleteEmploy } = require('../controllers/employeController');
const router = express.Router();

router.get('/getemploye', getAllEmploye);
router.post('/get/:id', getEmploye);
router.post('/add', addEmploye);
router.put('/update/:id', employeUpdate);
router.delete('/delete/:id', deleteEmploy);


module.exports = {
    routes: router
};