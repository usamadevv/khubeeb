const express = require('express');
const {postZone, getAllZones, deleteZoneById, getEveryZone, cloneZone, updateZone} = require('./zones.controller')
const zonesRouter = express.Router();
zonesRouter.post('/zones',postZone);
zonesRouter.get('/zones',getAllZones)

zonesRouter.post('/zones/clone',cloneZone)

zonesRouter.post('/zones/update',updateZone)
zonesRouter.get('/allzones',getEveryZone)

zonesRouter.delete('/zones/:zoneId',deleteZoneById)






module.exports = zonesRouter;