'use strict';

const { getEvents, getById, creatEvent, updateEvent, EventDelete } = require('../data/events');

const getAllEvents = async (req, res, next) => {
    try {
        const eventlist = await getEvents();
        res.send(eventlist);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const getEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await getById(eventId);
        res.send(event);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const addEvent = async (req, res, next) => {
    try {
        if (req.body.eventTitle != null && req.body.eventDescription != null && req.body.startDate != null && req.body.endDate != null && req.body.avenue != null && req.body.maxMembers != null) {
            const data = req.body;
            const insert = await creatEvent(data);
            res.send(insert);
        } else {
            res.send('Please fill all the details!');
        }
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const updatEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const data = req.body;
        const updated = await updateEvent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await EventDelete(eventId);
        res.send(deletedEvent);
    } catch (error) {
        res.status(404).send(error.message);
        res.send(error.message);
    };
};

module.exports = {
    getAllEvents,
    getEvent,
    addEvent,
    updatEvent,
    deleteEvent
};