const express = require('express');
const {postsub, getAllsubmissions, deletesub} = require('./sub.controller')
const subRouter = express.Router();
subRouter.post('/sub',postsub);
subRouter.get('/sub',getAllsubmissions)
subRouter.delete('/sub/:subid',deletesub)






module.exports = subRouter;