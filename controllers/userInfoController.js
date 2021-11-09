'use strict';

const { getUserInfo, getByIdUserInfo, creatUserInfo, updateUserInfo, deleteUserInfo } = require('../data/infoUser');

const getInfoUser = async (req, res, next) => {
    try {
        const userInfoList = await getUserInfo();
        res.send(userInfoList);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const getByIdInfoUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const userInfo = await getByIdUserInfo(Id);
        res.send(userInfo);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addUserInfo = async (req, res, next) => {
    try {
        /* if (req.body.Title != null &&
            req.body.FirstName != null &&
            req.body.LastName != null &&
            req.body.Mobile != null &&
            req.body.Dob != null &&
            req.body.Email != null &&
            req.body.Password != null &&
            req.body.ConfirmPassword != null &&
            req.body.currentDate != null &&
            req.body.Device_uuid != null &&
            req.body.browser_version != null &&
            req.body.IpAddress != null) { */

            const data = req.body;
            const insert = await creatUserInfo(data);
            res.send(insert);
        /* } else {
            res.send('Please fill all the details!');
        } */

    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const updateInfoUser = async (req, res, next) => {
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

const deleteInfoUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedUser = await deleteUserInfo(Id);
        res.send(deletedUser);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getInfoUser,
    getByIdInfoUser,
    addUserInfo,
    updateInfoUser,
    deleteInfoUser
};