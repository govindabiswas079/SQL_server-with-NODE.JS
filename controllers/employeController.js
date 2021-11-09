'use strict';

const { getEmployeAll, getById, creatEmploye, updateEmploy, deleteEmployee } = require('../data/emp');

const getAllEmploye = async (req, res, next) => {
    try {
        const employelist = await getEmployeAll();
        res.send(employelist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const getEmploye = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const employe = await getById(Id);
        res.send(employe);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addEmploye = async (req, res, next) => {
    try {
        if (req.body.name != null && req.body.email != null && req.body.designation != null && req.body.phoneNumber != null) {
            const data = req.body;
            const insert = await creatEmploye(data);
            res.send(insert);
        } else {
            res.send('Please fill all the details!');
        };
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const employeUpdate = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await updateEmploy(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const deleteEmploy = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedEmploye = await deleteEmployee(Id);
        res.send(deletedEmploye);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getAllEmploye,
    getEmploye,
    addEmploye,
    employeUpdate,
    deleteEmploy
};