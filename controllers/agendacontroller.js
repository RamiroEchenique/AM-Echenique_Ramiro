const AgendaModelo = require('../models/agendamodelo');
const MedicoModelo = require('../models/medicomodelo');//-------------

class AgendaController {
    static async index(req, res) {
        const agendas = await AgendaModelo.obtenerAgenda();
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();//-------
        console.log(agendas);
        res.render('agendas/listar_agenda', { agendas:agendas[0],medicos}); //agendas[0] contiene los datos reales de las filas que se obtuvo de la base de datos

    }

    static async listarAgendas(req, res) {
         try { 
            const medicoId = req.params.medicoId; 
            const agendas = await AgendaModelo.obtenerAgendasPorMedico(medicoId); 
            console.log("listarAgendas-agendas:",agendas);
            res.render('agendas/listar_agenda', { agendas }); 
        } catch (error) { 
            console.error('Error al obtener agendas:', error); 
            res.status(500).send('Error al obtener agendas'); } }


}

module.exports = AgendaController;	