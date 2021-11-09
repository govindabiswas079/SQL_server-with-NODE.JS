'use strict';

const userInfo = require('../userInfo');
const config = require('../../config');
const sql = require('mssql');

const getUserInfo = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await userInfo.loadSqlQueries('infoUser');
        const userList = await pool.request().query(sqlQueries.getListInfo);
        return userList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

const getByIdUserInfo = async (Id) => {
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

const creatUserInfo = async (userData) => {
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
            .input('Device_uuid', sql.NVarChar(50), userData.Device_uuid)
            .input('browser_version', sql.NVarChar(50), userData.browser_version)
            .input('IpAddress', sql.NVarChar(50), userData.IpAddress)
            .input('cardNumber', sql.NVarChar(50), userData.cardNumber)
            .query(sqlQueries.createInfo);
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    };
};

const updateUserInfo = async (Id, data) => {
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
            .input('Device_uuid', sql.NVarChar(50), data.Device_uuid)
            .input('browser_version', sql.NVarChar(50), data.browser_version)
            .input('IpAddress', sql.NVarChar(50), data.IpAddress)
            .input('cardNumber', sql.NVarChar(50), data.cardNumber)
            .query(sqlQueries.updateInfo);
        return update.recordset;
    } catch (error) {
        return error.message;
    };
};

const deleteUserInfo = async (Id) => {
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

module.exports = {
    getUserInfo,
    getByIdUserInfo,
    creatUserInfo,
    updateUserInfo,
    deleteUserInfo
};