'use strict';

const jobss = require('../jobss');
const config = require('../../config');
const sql = require('mssql');

const getJobs = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const jobsList = await pool.request().query(sqlQueries.getJobs);
        return jobsList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

const getById = async (Id) => {
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

const creatJobs = async (jobdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const insertEvent = await pool.request()
            .input('Name', sql.NVarChar(100), jobdata.Name)
            .input('Position', sql.NVarChar(1500), jobdata.Position)
            .input('Office', sql.NVarChar(100), jobdata.Office)
            .input('Salary', sql.BigInt, jobdata.Salary)
            .input('currentDate', sql.DateTime, new Date())

            .query(sqlQueries.createJobs);
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    };
};

const updateJobs = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await jobss.loadSqlQueries('jobs');
        const update = await pool.request()
            .input('Id', sql.BigInt, Id)
            .input('Name', sql.NVarChar(100), data.Name)
            .input('Position', sql.NVarChar(1500), data.Position)
            .input('Office', sql.NVarChar(100), data.Office)
            .input('Salary', sql.BigInt, data.Salary)
            .input('currentDate', sql.DateTime, data.currentDate)
            .query(sqlQueries.updateJobs);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

const deleteJobs = async (Id) => {
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


module.exports = {
    getJobs,
    getById,
    creatJobs,
    updateJobs,
    deleteJobs
};