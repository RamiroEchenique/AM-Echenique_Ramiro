const express = require('express');
const MedicoRouter = express.Router();
const MedicoController = require('../controllers/medicocontroller');

//index
MedicoRouter.get('/', MedicoController.index);

//medicotemplate
MedicoRouter.get('/medicotemplate/:medicoId', MedicoController.mostrarTemplate);



module.exports = MedicoRouter;
