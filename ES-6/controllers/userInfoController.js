'use strict';

import { getUserInfo, getByIdUserInfo, creatUserInfo, updateUserInfo, deleteUserInfo } from '../data/infoUser/index.js';
import express from 'express';

const router = express.Router();

export const getInfoUser = async (req, res, next) => {
    try {
        const userInfoList = await getUserInfo();
        res.send(userInfoList);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const getByIdInfoUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const userInfo = await getByIdUserInfo(Id);
        res.send(userInfo);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const addUserInfo = async (req, res, next) => {
    try {

        const data = req.body;
        const insert = await creatUserInfo(data);
        res.send(insert);

    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const updateInfoUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await updateUserInfo(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const deleteInfoUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedUser = await deleteUserInfo(Id);
        res.send(deletedUser);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

/* module.exports = {
    getInfoUser,
    getByIdInfoUser,
    addUserInfo,
    updateInfoUser,
    deleteInfoUser
}; */
export default router;