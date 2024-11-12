const crearConexion = require('../config/configdb');

class DiagnosticoModelo{
    static async obtenerdiagnosticos(pacienteId) {
        try {
            const conexion = await crearConexion();
            const evoluciones = await conexion.query(`
                    SELECT a.fecha, a.hora, t.motivo, e.descripcion, pa.dni,pe.nombre,pe.apellido
                    FROM diagnostico e
                    JOIN atenciones a ON a.id = e.id_atenciones
                    JOIN turnos t ON t.id = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    WHERE pa.id = ?`, [pacienteId]);
            return evoluciones;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // Asegúrate de que el error se propaga
        }
    }
}

module.exports = DiagnosticoModelo;