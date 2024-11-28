const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');
const AtencionModelo = require('./atencionmodelo');

class EvolucionModelo1 {
    static async obtenerEvoluciones(pacienteId) {
        try {
            //const conexion = await crearConexion();
            const evoluciones = await pool.query(`
                    SELECT a.fecha, a.hora, t.motivo, e.descripcion, pa.dni,pe.nombre,pe.apellido
                    FROM evoluciones e
                    JOIN atenciones a ON a.id = e.id_atenciones
                    JOIN turnos t ON t.idturno = a.id_turnos
                    JOIN paciente pa ON pa.idpaciente = t.idpaciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    WHERE pa.idpaciente = ?`, [pacienteId]);
            return evoluciones;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // el error se propaga
        }
    }
    

    static async crear (atencionId, evoluciontexto) {
        try {
            //const conexion = await crearConexion();
            //const atenciones=await AtencionModelo.obtenerPorIdTurno(turnoId);
            //console.log("EvolucionModelo1 - atenciones:", atenciones);
            const evolucion = await pool.query(
                'INSERT INTO evoluciones (id_atenciones, descripcion) VALUES (?, ?)', 
                [atencionId, evoluciontexto]);
            return evolucion[0].affectedRows == 1; // Retorna true si se creó la evolucion;
            //return true;
        } catch (error) {
            console.error('Error al crear evolucion:', error);
            throw error; // Asegúrate de que el error se propaga
        }
        
    }
}

module.exports = EvolucionModelo1;