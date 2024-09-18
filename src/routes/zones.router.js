const express = require('express');
const {postZone, getAllZones, deleteZoneById, getEveryZone} = require('./zones.controller')
const zonesRouter = express.Router();
zonesRouter.post('/zones',postZone);
zonesRouter.get('/zones',getAllZones)
zonesRouter.get('/allzones',getEveryZone)

zonesRouter.delete('/zones/:zoneId',deleteZoneById)






module.exports = zonesRouter;