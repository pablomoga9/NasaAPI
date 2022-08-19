const express = require('express')
const landingsControllers = require("../controllers/landingsControllers");
const landingsRouter = express.Router();

landingsRouter.get('/astronomy/landings', landingsControllers.getLandings);
landingsRouter.get('/astronomy/landings', landingsControllers.getLandingByMass);
landingsRouter.get('/astronomy/landings', landingsControllers.getLandingByClass);
landingsRouter.post('astronomy/landings', landingsControllers.create)