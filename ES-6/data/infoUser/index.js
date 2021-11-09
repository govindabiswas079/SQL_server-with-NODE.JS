'use strict';

import userInfo from '../userInfo.js';
import * as config from '../../config.js';
import sql from 'mssql';
import express from 'express';

const router = express.Router();

export const getUserInfo = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const userList = await pool.request().query(sqlQueries.getListInfo);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

export const getByIdUserInfo = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const user = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.getByIdInfo);
        return user.recordset;
    } catch (error) {
        return error.message;
    };
};

export const creatUserInfo = async (userData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const insertUser = await pool.request()
            .input('Title', sql.NVarChar(30), userData.Title)
            .input('FirstName', sql.NVarChar(50), userData.FirstName)
            .input('LastName', sql.NVarChar(50), userData.LastName)
            .input('Mobile', sql.BigInt, userData.Mobile)
            .input('Dob', sql.NVarChar(50), userData.Dob)
            .input('Email', sql.NVarChar(50), userData.Email)
            .input('Password', sql.NVarChar(50), userData.Password)
            .input('ConfirmPassword', sql.NVarChar(50), userData.ConfirmPassword)
            .input('currentDate', sql.DateTime, new Date())
            .query(sqlQueries.createInfo);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    };
};

export const updateUserInfo = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const update = await pool.request()
            .input('Id', sql.BigInt, Id)
            .input('Title', sql.NVarChar(30), data.Title)
            .input('FirstName', sql.NVarChar(50), data.FirstName)
            .input('LastName', sql.NVarChar(50), data.LastName)
            .input('Mobile', sql.BigInt, data.Mobile)
            .input('Dob', sql.NVarChar(50), data.Dob)
            .input('Email', sql.NVarChar(50), data.Email)
            .input('Password', sql.NVarChar(50), data.Password)
            .input('ConfirmPassword', sql.NVarChar(50), data.ConfirmPassword)
            .input('currentDate', sql.DateTime, new Date())
            .query(sqlQueries.updateInfo);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

export const deleteUserInfo = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const deleteUser = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.deleteInfo);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    };
};

/* module.exports = {
    getUserInfo,
    getByIdUserInfo,
    creatUserInfo,
    updateUserInfo,
    deleteUserInfo
}; */
/* export default {
    getUserInfo,
    getByIdUserInfo,
    creatUserInfo,
    updateUserInfo,
    deleteUserInfo
} */
export default router;