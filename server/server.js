require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const socketio = require('socket.io');
const cookieParser = require("cookie-parser");
const port = process.env.MY_PORT;
//require config file
require('./config/mongoose.config');
require('./config/jwt.config');

app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//establishes connection of routes for db
require('./routes/event.routes')(app);
require('./routes/user.routes')(app);


//listens for information on local server
app.listen(port,() => {
    console.log('Listening on port:'+ port) 
});
