'use strict';

import employe from '../employe.js';
import * as config from '../../config.js';
import sql from 'mssql';
import express from 'express';

const router = express.Router();

export const getEmployeAll = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await employe.loadSqlQueries('emp');
        const employeList = await pool.request().query(sqlQueries.employelist);
        return employeList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};


export const getById = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await employe.loadSqlQueries('emp');
        const employ = await pool.request()
            .input('Id', sql.BigInt, Id)
            .query(sqlQueries.employebyid);
        return employ.recordset;
    } catch (error) {
        return error.message;
    };
};

export const creatEmploye = async (employedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await employe.loadSqlQueries('emp');
        const insertEmploye = await pool.request()
            .input('name', sql.NVarChar(50), employedata.name)
            .input('email', sql.NVarChar(50), employedata.email)
            .input('designation', sql.NVarChar(50), employedata.designation)
            .input('phoneNumber', sql.BigInt, employedata.phoneNumber)
            .query(sqlQueries.createEmploye);
        return insertEmploye.recordset;
    } catch (error) {
        return error.message;
    };
};

export const updateEmploy = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await employe.loadSqlQueries('emp');
        const update = await pool.request()
            .input('Id', sql.BigInt, Id)
            .input('name', sql.NVarChar(50), data.name)
            .input('email', sql.NVarChar(50), data.email)
            .input('designation', sql.NVarChar(50), data.designation)
            .input('phoneNumber', sql.BigInt, data.phoneNumber)
            .query(sqlQueries.updateEmploye);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

export const deleteEmployee = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await employe.loadSqlQueries('emp');
        const deleteEmp = await pool.request()
            .input('Id', sql.BigInt, Id)
            .query(sqlQueries.deleteEmploye);
        return deleteEmp.recordset;
    } catch (error) {
        return error.message;
    };
};

/* export default {
    getEmploye,
    getById,
    creatEmploye,
    updateEmploy,
    deleteEmployee
} */
export default router;