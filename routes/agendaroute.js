const express = require('express');
const AgendaRouter = express.Router();
const AgendaController = require('../controllers/agendacontroller');

//index
AgendaRouter.get('/', AgendaController.index);


module.exports = AgendaRouter;
