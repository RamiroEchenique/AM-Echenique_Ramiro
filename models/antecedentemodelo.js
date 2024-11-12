const crearConexion = require('../config/configdb');

class AntecedenteModelo{
    static async obtenerAntecedentes(pacienteId) {
        try {
            const conexion = await crearConexion();
            const alergias = await conexion.query(`
                    SELECT a.fecha, a.hora, t.motivo, ap.descripcion,ap.fecha_desde,ap.fecha_hasta, pa.dni,pe.nombre,pe.apellido
                    FROM antecedentes_patologicos ap
                    JOIN atenciones a ON a.id = ap.id_atenciones
                    JOIN turnos t ON t.id = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    WHERE pa.id = ?`, [pacienteId]);
            return alergias;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // Asegúrate de que el error se propaga
        }
    }
}

module.exports = AntecedenteModelo;