const userController = require("../controllers/user.controller");
// add in the JWT middleware function "authenticate" - we named it in jwt.config.js
const { authenticate } = require("../config/jwt.config");
const User = require("../models/user.model");



module.exports = (app) => {
  app.post("/api/user/register", userController.register);
  app.post("/api/user/login", userController.login);
  app.post("/api/user/logout", userController.logout);
};