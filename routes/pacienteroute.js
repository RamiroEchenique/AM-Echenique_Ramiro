const express = require('express');
const PacienteRouter = express.Router();
const PacienteController = require('../controllers/pacientecontroller');

//
PacienteRouter.get('/verhce/:pacienteId', PacienteController.obtenerPacienteyHCE);



module.exports = PacienteRouter;