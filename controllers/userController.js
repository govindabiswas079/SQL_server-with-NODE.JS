'use strict';

const { getUsersAll, getById, creatUser, updateusers, deleteUsers } = require('../data/user');

const getAllUsers = async (req, res, next) => {
    try {
        const userslist = await getUsersAll();
        res.send(userslist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const getUsers = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const user = await getById(Id);
        res.send(user);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addUser = async (req, res, next) => {
    try {
        if (req.body.name != null && req.body.email != null && req.body.username != null && req.body.mobile != null && req.body.dob != null && req.body.address != null && req.body.counrty != null && req.body.state != null && req.body.city != null && req.body.zipcode != null && req.body.role != null && req.body.password != null) {
            const data = req.body;
            const insert = await creatUser(data);
            res.send(insert);
        } else {
            res.send('Please fill all the details!');
        }
        res.status(201).send('Successful Created');
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const updateUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await updateusers(Id, data);
        res.send(updated);
        res.status(202).send('Successful Accepted');
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const deleteUser = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deleteduser = await deleteUsers(Id);
        res.send(deleteduser);
        res.status(201).send('Successful Delete');
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getAllUsers,
    getUsers,
    addUser,
    updateUser,
    deleteUser
};