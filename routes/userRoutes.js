'use strict';

const express = require('express');
// const userControll = require('../controllers/userController');
const { getAllUsers, getUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/getall', getAllUsers);
router.post('/get/:id', getUsers);
router.post('/add', addUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);


module.exports = {
    routes: router
};