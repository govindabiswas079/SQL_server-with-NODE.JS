'use strict';

import contacts from '../contacts.js';
import * as config from '../../config.js';
import sql from 'mssql';
import express from 'express';

const router = express.Router();

export const getContacts = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await contacts.loadSqlQueries('contac');
        const contactsList = await pool.request().query(sqlQueries.listContacts);
        return contactsList.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

export const getcontactsbyid = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await contacts.loadSqlQueries('contac');
        const idcontact = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.contactbyid);
        return idcontact.recordset;
    } catch (error) {
        console.log(error.message);
    };
};

export const createContacts = async (contactdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await contacts.loadSqlQueries('contac');
        const insertContact = await pool.request()
            .input('Name', sql.NVarChar(50), contactdata.Name)
            .input('Email', sql.NVarChar(50), contactdata.Email)
            .input('Subject', sql.NVarChar(50), contactdata.Subject)
            .input('Message', sql.NVarChar(50), contactdata.Message)
            .query(sqlQueries.createContacts);
        return insertContact.recordset;
    } catch (error) {
        return error.message;
    };
};

export const contactUpdate = async (Id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await contacts.loadSqlQueries('contac');
        const updateContact = await pool.request()
            .input('Id', sql.Int(50), Id)
            .input('Name', sql.NVarChar(50), data.Name)
            .input('Email', sql.NVarChar(50), data.Email)
            .input('Subject', sql.NVarChar(50), data.Subject)
            .input('Message', sql.NVarChar(50), data.Message)
            .query(sqlQueries.updateContact);
        return updateContact.recordset;
    } catch (error) {
        return error.message;
    };
};

export const ContactDelete = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await contacts.loadSqlQueries('contac');
        const deleteContacts = await pool.request()
            .input('Id', sql.Int, Id)
            .query(sqlQueries.deleteContacts);
        return deleteContacts.recordset;
    } catch (error) {
        return error.message;
    };
};

/* export default {
    getContacts,
    createContacts,
    deleteContact,
    getcontactsbyid,
    contactUpdate
}; */
export default router;