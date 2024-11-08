const AgendaModelo = require('../models/agendamodelo');
const MedicoModelo = require('../models/medicomodelo');
const TurnoModelo = require('../models/turnomodelo');

class AgendaController {
    static async index(req, res) {
        const agendas = await AgendaModelo.obtenerAgenda();
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();
        console.log(agendas);
        res.render('agendas/listar_agenda', { agendas:agendas[0],medicos}); //agendas[0] contiene los datos reales de las filas que se obtuvo de la base de datos

    }

    static async listarAgendas(req, res) {
         try { 
            const medicoId = req.params.medicoId;
            //const fecha = req.query.fecha;
            const fecha = '2024-10-31'; 
            const agendas = await AgendaModelo.obtenerAgendasPorMedico(medicoId);
            const medico = await MedicoModelo.obtenerNombreMedicoPorId(medicoId);
            const turnos=await TurnoModelo.obtenerTurnosPorFecha(fecha,agendas[0].id);
            // Formatear la fecha antes de enviarla a la vista 
            turnos[0].forEach(turno => { turno.fecha = new Date(turno.fecha).toLocaleDateString('es-AR'); });
            console.log("listarAgendas-turnos:",turnos);
            //console.log("listarAgendas-agendas:",agendas);
            console.log("listarAgendas-medicos:",medico);
            //res.render('agendas/listar_agenda', { agendas,medico:medico[0] });
            res.render('agendas/listar_agenda', { agendas,medico:medico[0],turnos:turnos[0] }); 
        } catch (error) { 
            console.error('Error al obtener agendas:', error); 
            res.status(500).send('Error al obtener agendas'); } }


}

module.exports = AgendaController;	