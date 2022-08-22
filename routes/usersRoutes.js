const express = require('express');
const usersControllers = require("../controllers/usersControllers");
const usersRouter = express.Router();

// usersRouter.get('/astronomy/users', usersControllers.getUsers);
// usersRouter.get('/astronomy/users?:email', usersControllers.getUserByEmail);
 usersRouter.post('/astronomy/users/create', usersControllers.createUser);

module.exports = usersRouter;

