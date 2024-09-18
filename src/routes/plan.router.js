const express = require('express');
const {postPlan, getAllPlans, deletePlanById} = require('./plan.controller')
const planRouter = express.Router();
planRouter.post('/plans',postPlan);
planRouter.get('/plans',getAllPlans)
planRouter.delete('/plans/:planId',deletePlanById)






module.exports = planRouter;