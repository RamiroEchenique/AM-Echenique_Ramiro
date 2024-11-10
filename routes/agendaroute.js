const express = require('express');
const AgendaRouter = express.Router();
const AgendaController = require('../controllers/agendacontroller');

//index
//AgendaRouter.get('/', AgendaController.index);

// Ruta para obtener turnos por fecha (con AJAX)
AgendaRouter.get('/:medicoId/turnos', AgendaController.obtenerTurnosPorFecha);

// Obtener agendas por médico 
AgendaRouter.get('/:medicoId', AgendaController.listarAgendas);


module.exports = AgendaRouter;
