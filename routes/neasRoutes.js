const express = require('express')
const neasControllers = require("../controllers/neasControllers");
const neasRouter = express.Router();

 neasRouter.get('/astronomy/neas', neasControllers.getNeas);
 neasRouter.post('/astronomy/neas', neasControllers.createNea);
 neasRouter.delete('/astronomy/neas', neasControllers.deleteNea);
 neasRouter.put('/astronomy/neas', neasControllers.updateNea);

 module.exports = neasRouter;