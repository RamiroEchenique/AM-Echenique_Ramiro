const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');

class DiagnosticoModelo{
    static async obtenerdiagnosticos(pacienteId) {
        try {
            //const conexion = await crearConexion();
            const diagnosticos = await pool.query(`
                    SELECT a.fecha, a.hora, t.motivo, d.descripcion,d.tipo, pa.dni,pe.nombre,pe.apellido
                    FROM diagnostico d
                    JOIN atenciones a ON a.id = d.id_atenciones
                    JOIN turnos t ON t.idturno = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    WHERE pa.id = ?`, [pacienteId]);
            return diagnosticos;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // Asegúrate de que el error se propaga
        }
    }
}

module.exports = DiagnosticoModelo;