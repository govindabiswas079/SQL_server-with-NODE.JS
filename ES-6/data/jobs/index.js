'use strict';

import jobss from '../jobss.js';
import * as config from '../../config.js';
import sql from 'mssql';
import express from 'express';

const router = express.Router();

export const getJobs = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const jobsList = await pool.request().query(sqlQueries.getJobs);
        return jobsList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

export const getById = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const event = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.getByIdJobs);
        return event.recordset;
    } catch (error) {
        return error.message;
    };
};

export const creatJobs = async (jobdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const insertEvent = await pool.request()
            .input('Name', sql.NVarChar(100), jobdata.Name)
            .input('Position', sql.NVarChar(1500), jobdata.Position)
            .input('Office', sql.NVarChar(100), jobdata.Office)
            .input('Salary', sql.BigInt, jobdata.Salary)
            .query(sqlQueries.createJobs);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    };
};

export const updateJobs = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const update = await pool.request()
            .input('Id', sql.BigInt, Id)
            .input('Name', sql.NVarChar(100), data.Name)
            .input('Position', sql.NVarChar(1500), data.Position)
            .input('Office', sql.NVarChar(100), data.Office)
            .input('Salary', sql.BigInt, data.Salary)
            .query(sqlQueries.updateJobs);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

export const deleteJobs = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const deleteJob = await pool.request()
            .input('Id', sql.BigInt, Id)
            .query(sqlQueries.deleteJobs);
        return deleteJob.recordset;
    } catch (error) {
        return error.message;
    };
};

/* export default {
    getJobs,
    getById,
    creatJobs,
    updateJobs,
    deleteJobs
} */
export default router;