'use strict';

import { getJobs, getById, creatJobs, updateJobs, deleteJobs } from '../data/jobs/index.js';
import express from 'express';

const router = express.Router();

export const getAllJobs = async (req, res, next) => {
    try {
        const eventlist = await getJobs();
        res.send(eventlist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const getjob = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const job = await getById(Id);
        res.send(job);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const addJobs = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await creatJobs(data);
        res.send(insert);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export const jobUpdate = async (req, res, next) => {
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

export const jobsDelete = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedJobss = await deleteJobs(Id);
        res.send(deletedJobss);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

export default router;