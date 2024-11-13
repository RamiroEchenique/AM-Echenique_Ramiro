const express = require('express');
const PacienteRouter = express.Router();
const PacienteController = require('../controllers/pacientecontroller');

PacienteRouter.get('/verhce/:pacienteId', PacienteController.obtenerPacienteyHCE);
// Muestra el formulario de atención para el paciente
PacienteRouter.get('/atender/:turnoId', PacienteController.mostrarAtencion);
// Guarda la información de la atención enviada desde el formulario
PacienteRouter.post('/atender/:turnoId', PacienteController.guardarAtencion);


module.exports = PacienteRouter;