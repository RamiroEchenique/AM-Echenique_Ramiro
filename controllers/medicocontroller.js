const MedicoModelo = require('../models/medicomodelo');

class MedicoController {
    static async index(req, res) {
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();
        //const agendas = await AgendaModelo.obtenerAgenda();
        console.log("medicos ahora:");
        console.log(medicos);
        res.render('medicos/listar_medicos', { medicos}); 
    }

    static async mostrarTemplate(req, res) {
        
        const medicoId = req.params.medicoId; //console.log("medicoId:", medicoId);
        const medico = await MedicoModelo.obtenerNombreMedicoPorId(medicoId); //console.log("medico:", medico);
        const templates = await MedicoModelo.obtenerTemplatesMedicoPorId(medicoId); //console.log("templates de mostrar template:", templates);
        res.render('medicos/templates', { medico:medico[0], templates});
        //res.render('medicos/templates', { medico:medico[0]});
    }


}

module.exports = MedicoController;	