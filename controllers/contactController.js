'use strict';

const { getContacts, getcontactsbyid, createContacts, contactUpdate, ContactDelete } = require('../data/contac');

const getAllContact = async (req, res, next) => {
    try {
        const contactlist = await getContacts();
        res.send(contactlist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const contactId = async (req, res, next) => {
    try {
        const idContact = req.params.id;
        const contact = await getcontactsbyid(idContact);
        res.send(contact);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addContact = async (req, res, next) => {
    try {
        if (req.body.Name != null && req.body.Email != null && req.body.Subject != null && req.body.Message != null) {
            const data = req.body;
            const insert = await createContacts(data);
            res.send(insert);
            res.send().console.log(insert);
        } else {
            res.send('Please fill all the details!');
        }
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const updateId = async (req, res, next) => {
    try {
        const contactId = req.params.id;
        const updateData = req.body;
        const updated = await contactUpdate(contactId, updateData)
        res.send(updated);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const deleteContact = async (req, res, next) => {
    try {
        const Id = req.params.id;
        const deletedContact = await ContactDelete(Id);
        res.send(deletedContact);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getAllContact,
    addContact,
    deleteContact,
    contactId,
    updateId
};