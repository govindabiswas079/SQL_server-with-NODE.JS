'use strict';

import users from '../users.js';
import * as config from '../../config.js';
import sql from 'mssql';
import express from 'express';

const router = express.Router();

export const getUsersAll = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await users.loadSqlQueries('user');
        const usersList = await pool.request().query(sqlQueries.listUsers);
        return usersList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

export const getById = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await users.loadSqlQueries('user');
        const user = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.listByIdUsers);
        return user.recordset;
    } catch (error) {
        return error.message;
    };
};

export const creatUser = async (userdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await users.loadSqlQueries('user');
        const insertUser = await pool.request()
            .input('name', sql.NVarChar(50), userdata.name)
            .input('email', sql.NVarChar(50), userdata.email)
            .input('username', sql.NVarChar(50), userdata.username)
            .input('mobile', sql.BigInt, userdata.mobile)
            .input('dob', sql.Date, userdata.dob)
            .input('address', sql.NVarChar(50), userdata.address)
            .input('counrty', sql.NVarChar(50), userdata.counrty)
            .input('state', sql.NVarChar(50), userdata.state)
            .input('city', sql.NVarChar(50), userdata.city)
            .input('zipcode', sql.BigInt, userdata.zipcode)
            .input('role', sql.NVarChar(50), userdata.role)
            .input('password', sql.NVarChar(50), userdata.password)
            .query(sqlQueries.createUsers);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    };
};

export const updateusers = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await users.loadSqlQueries('user');
        const update = await pool.request()
            .input('Id', sql.BigInt, Id)
            .input('name', sql.NVarChar(70), data.name)
            .input('email', sql.NVarChar(70), data.email)
            .input('username', sql.NVarChar(70), data.username)
            .input('mobile', sql.BigInt, data.mobile)
            .input('dob', sql.Date, data.dob)
            .input('address', sql.NVarChar(70), data.address)
            .input('counrty', sql.NVarChar(70), data.counrty)
            .input('state', sql.NVarChar(70), data.state)
            .input('city', sql.NVarChar(70), data.city)
            .input('zipcode', sql.BigInt, data.zipcode)
            .input('role', sql.NVarChar(70), data.role)
            .input('password', sql.NVarChar(70), data.password)
            .query(sqlQueries.updateUsers);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

export const deleteUsers = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await users.loadSqlQueries('user');
        const deleteUser = await pool.request()
            .input('Id', sql.BigInt, Id)
            .query(sqlQueries.deleteUsers);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    };
};

/* export default {
    getUsers,
    getById,
    creatUser,
    updateusers,
    deleteUsers
} */

export default router;