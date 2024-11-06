const MedicoModelo = require('../models/medicomodelo');

class MedicoController {
    static async index(req, res) {
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();
        //const agendas = await AgendaModelo.obtenerAgenda();
        console.log("medicos ahora:");
        console.log(medicos);
        res.render('medicos/listar_medicos', { medicos}); 
    }

}

module.exports = MedicoController;	