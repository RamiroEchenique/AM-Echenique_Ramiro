const PacienteModelo = require('../models/pacientemodelo');
const EvolucionModelo = require('../models/evolucionmodelo1');
const DiagnosticoModelo = require('../models/diagnosticomodelo');

class PacienteController {
    static async obtenerPacienteyHCE(req, res) {
        try {
            console.log("----inicio paciente controller - obtener paciente----");
            //Paciente
            const pacienteId = req.params.pacienteId;
            console.log("pacienteId:", pacienteId);
            const paciente = await PacienteModelo.obtenerPacientePorId(pacienteId);
            paciente[0].forEach(paciente => { paciente.fecha_nacimiento = new Date(paciente.fecha_nacimiento).toLocaleDateString('es-AR'); });
            console.log("paciente:", paciente[0]);
            //HCE:Evoluciones
            const evoluciones = await EvolucionModelo.obtenerEvoluciones(pacienteId);
            evoluciones[0].forEach(evolucion => { evolucion.fecha = new Date(evolucion.fecha).toLocaleDateString('es-AR'); });
            console.log("evoluciones:", evoluciones[0]);
            //HCE:Diagnostico
            const diagnosticos = await DiagnosticoModelo.obtenerdiagnosticos(pacienteId);
            diagnosticos[0].forEach(diagnostico => { diagnostico.fecha = new Date(diagnostico.fecha).toLocaleDateString('es-AR'); });
            console.log("diagnosticos:", diagnosticos[0]); 

            const datos = { paciente: paciente[0], evoluciones: evoluciones[0], diagnosticos: diagnosticos[0] };
            res.render('hce/listar_hce', datos);
            console.log("----fin paciente controller - obtener paciente----");
        }catch (error) {
            
        }
    }
}

module.exports = PacienteController