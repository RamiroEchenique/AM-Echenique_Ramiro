const AgendaModelo = require('../models/agendamodelo');
const MedicoModelo = require('../models/medicomodelo');//-------------

class AgendaController {
    static async index(req, res) {
        const agendas = await AgendaModelo.obtenerAgenda();
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();//-------
        console.log(agendas);
        res.render('agendas/listar_agenda', { agendas:agendas[0],medicos}); //agendas[0] contiene los datos reales de las filas que se obtuvo de la base de datos

    }


}

module.exports = AgendaController;	