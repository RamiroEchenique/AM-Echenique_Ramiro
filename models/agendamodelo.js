const crearConexion = require('../config/configdb');

class AgendaModelo {
    constructor(id,id_medico_especialidad,estado) {
        this.id = id;
        this.id_medico_especialidad = id_medico_especialidad;
        this.estado = estado;

    }

    static async obtenerAgenda() {
        try {
            const conexion = await crearConexion();
            const [agenda] = await conexion.query(`
                CALL obtenerAgendaConEspecialidad()
            `);
            return agenda;
        } catch (error) {
            console.error('Error al obtener la agenda:', error);
        }
    }

    static async obtenerAgendasPorMedico(medicoId) {
        console.log("obtenerAgendasPorMedico-medicoId:",medicoId);
        //medicoId = 1;
        //console.log("medicoId despues:",medicoId);
         try { 
            const conexion = await crearConexion(); 
            const [agendas] = await conexion.query(` 
                SELECT a.id, a.id_medico_especialidad, e.nombre_especialidad, a.estado 
                FROM agenda a 
                JOIN medico_especialidad me ON a.id_medico_especialidad = me.matricula 
                JOIN especialidad e ON me.id_especialidad = e.id 
                WHERE me.id_medico = ?; 
                `, [medicoId]);
                //console.log("obtenerAgendasPorMedico-agendas:",agendas); 
                return agendas; 
            } catch (error) { 
                console.error('Error al obtener agendas:', error); 
            } }

}

module.exports = AgendaModelo;