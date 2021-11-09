'use strict';

const express = require('express');
// const userInfoControll = require('../controllers/userInfoController');
const { getInfoUser, getByIdInfoUser, addUserInfo, updateInfoUser, deleteInfoUser } = require('../controllers/userInfoController');
const router = express.Router();

router.get('/getuser', getInfoUser);
router.post('/get/:id', getByIdInfoUser);
router.post('/add', addUserInfo);
router.put('/update/:id', updateInfoUser);
router.delete('/delete/:id', deleteInfoUser);


module.exports = {
    routes: router
};