'use strict';

const { getJobs, getById, creatJobs, updateJobs, deleteJobs } = require('../data/jobs');

const getAllJobs = async (req, res, next) => {
    try {
        const eventlist = await getJobs();
        res.send(eventlist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const getjob = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const job = await getById(Id);
        res.send(job);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addJobs = async (req, res, next) => {
    try {
        if (req.body.Name != null && req.body.Position != null && req.body.Office != null && req.body.Salary != null && req.currentDate !== null) {
            const data = req.body;
            const insert = await creatJobs(data);
            res.send(insert);
        } else {
            res.send('Please fill all the details!');
        }
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const jobUpdate = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const data = req.body;
        const updated = await updateJobs(Id, data);
        res.send(updated);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const jobsDelete = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedJobss = await deleteJobs(Id);
        res.send(deletedJobss);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getAllJobs,
    getjob,
    addJobs,
    jobUpdate,
    jobsDelete
};