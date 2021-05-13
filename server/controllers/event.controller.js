const Event = require('../models/event.model');
const jwt = require('jsonwebtoken');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    })
}

module.exports.createEvent = (req, response) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    const email = decodedJwt.payload.email;
    const { name, showStart, showEnd, eventDescript, ticketInfo, accessURL } = req.body;
    Event.create({
        name, showStart, showEnd, eventDescript, ticketInfo, accessURL, email
    })
        .then(event => response.json(event))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllEvents = (request, response) => {
    Event.find({})
        .sort({name: "ascending"})
        .then(events => response.json(events))
        .catch(err => response.json(err))
}

module.exports.getEvent = (request, response) => {
    Event.findOne({_id:request.params.id})
        .then(event => response.json(event))
        .catch(err => response.json(err))
}

module.exports.updateEvent = (request, response) => {
    Event.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,useFindAndModify:false,runValidators:true})
        .then(updatedEvent => response.json(updatedEvent))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteEvent = (request, response) => {
    Event.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}