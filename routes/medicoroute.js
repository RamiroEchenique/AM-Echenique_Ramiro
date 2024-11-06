const express = require('express');
const MedicoRouter = express.Router();
const MedicoController = require('../controllers/medicocontroller');

//index
MedicoRouter.get('/', MedicoController.index);



module.exports = MedicoRouter;
