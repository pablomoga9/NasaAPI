const express = require('express')
const neasControllers = require("../controllers/neasControllers");
const neasRouter = express.Router();

 neasRouter.get('/astronomy/neas', neasControllers.getNeas);
//  neasRouter.get('/astronomy/landings', neasControllers.getNeasByClass);
//  neasRouter.get('/astronomy/landings', neasControllers.getLandingByDate);
//  neasRouter.post('astronomy/landings', neasControllers.createNea);

 module.exports = neasRouter;