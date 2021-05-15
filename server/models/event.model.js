const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: { 
        type: String,
        require: [true, "Name is required"],
        minlength: [3, "must be 3 or more characters"],
    },
    showStart: {
        type: Date,
        require: false
    },
    showEnd: {
        type: Date,
        require: false
    },
    eventDescript: {
        type: String,
        require: [true, "Description is required"],
        minlength: [3, "must be 3 or more characters"]
    },
    ticketInfo: {
        type: String,
        require: [true, "Please provide information regarding tickets to your event"]
    },
    accessURL:{
        type: String,
        require: false
    },
    imageURL:{
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    }
}, { timestamps: false});
module.exports = mongoose.model('Event', EventSchema);