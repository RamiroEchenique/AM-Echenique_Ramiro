const AgendaModelo = require('../models/agendamodelo');
const MedicoModelo = require('../models/medicomodelo');
const TurnoModelo = require('../models/turnomodelo');

class AgendaController {
    static async index(req, res) {
        const agendas = await AgendaModelo.obtenerAgenda();
        const medicos = await MedicoModelo.obtenerMedicoPorNombre();
        console.log(agendas);
        res.render('agendas/listar_agenda', { agendas: agendas[0], medicos }); 
    }

    static async listarAgendas(req, res) {
        try {
            console.log("--------------------------------------inicio agenda controller - listar agendas -------------------------------------------------------")
            const medicoId = req.params.medicoId;
    
            //const fecha = req.query.fecha;

            // Carga los turnos iniciales para la fecha actual
            const fecha = new Date().toISOString().split('T')[0];  // Fecha de hoy
            const fecha1 = '2024-11-10';

            console.log("medicoId:", medicoId);
            console.log("fecha0:", fecha);
            console.log("fecha1:", fecha1);
            const agendas = await AgendaModelo.obtenerAgendasPorMedico(medicoId);
            const medico = await MedicoModelo.obtenerNombreMedicoPorId(medicoId);
            const turnos = await TurnoModelo.obtenerTurnosPorFecha(fecha, agendas[0].id);
            turnos[0].forEach(turno => { turno.fecha = new Date(turno.fecha).toLocaleDateString('es-AR'); });
            //console.log("agendas.medicoId:", agendas[0].medicoId);
            console.log("listarAgendas-medicos:", medico[0]);
            console.log("listarAgendas-agendas:", agendas[0]);
            console.log("listarAgendas-turnos:", turnos);
            console.log("turnos.length:", turnos[0].length);
            console.log("--------------------------------------fin agenda controller- listar agendas -------------------------------------------------------")
            res.render('agendas/listar_agenda', { agendas, medico: medico[0], turnos: turnos[0] });
        } catch (error) {
            console.error('Error al obtener agendas:', error);
            res.status(500).send('Error al obtener agendas');
        }
    }


        // Método para obtener los turnos por fecha, devolviendo JSON
    // Método para obtener los turnos por fecha y agendaId, devolviendo JSON
    static async obtenerTurnosPorFecha(req, res) {
        try {
            //console.log("-------------------------------inicio agenda controller - obtener turnos por fecha -------------------------------------------------")
            const medicoId = req.params.medicoId;
            const fecha = req.query.fecha;
            const agendaId = req.query.agendaId;
    
            //console.log("Datos recibidos: ", { medicoId, fecha, agendaId }); // Log para verificar
    
            // Obtener turnos específicos para la fecha y agenda seleccionada
            const turnos = await TurnoModelo.obtenerTurnosPorFecha(fecha, agendaId);
    
            turnos[0].forEach(turno => { turno.fecha = new Date(turno.fecha).toLocaleDateString('es-AR'); });
    
            res.json(turnos[0]);
            //console.log("-------------------------------fin agenda controller - obtener turnos por fecha -------------------------------------------------")
        } catch (error) {
            console.error('Error al obtener turnos por fecha y agenda:', error);
            res.status(500).send('Error al obtener turnos');
        }
    }
    

}
    

module.exports = AgendaController;
