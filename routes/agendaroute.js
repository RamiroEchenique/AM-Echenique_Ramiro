const express = require('express');
const AgendaRouter = express.Router();
const AgendaController = require('../controllers/agendacontroller');

//index
//AgendaRouter.get('/', AgendaController.index);

// Obtener agendas por médico 
AgendaRouter.get('/:medicoId', AgendaController.listarAgendas);


module.exports = AgendaRouter;
