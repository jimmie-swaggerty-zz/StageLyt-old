const EventController = require('../controllers/event.controller');
const { authenticate } = require("../config/jwt.config");

module.exports = function(app){
    app.get('/api', EventController.index);
    app.post('/api/events', authenticate, EventController.createEvent)
    app.get('/api/events', EventController.getAllEvents);
    app.get('/api/myevents', authenticate, EventController.getMyEvents); 
    app.get('/api/event/:id', EventController.getEvent);
    app.put('/api/event/:id', EventController.updateEvent);
    app.delete('/api/events/:id', EventController.deleteEvent)
}
