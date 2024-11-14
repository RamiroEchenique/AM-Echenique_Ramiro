const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');

class AlergiaModelo{
    static async obtenerAlergias(pacienteId) {
        try {
            //const conexion = await crearConexion();
            const alergias = await pool.query(`
                    SELECT a.fecha, a.hora, t.motivo, aln.nombre_alergia,ali.importancia,al.fecha_desde,al.fecha_hasta, pa.dni,pe.nombre,pe.apellido
                    FROM alergias al
                    JOIN atenciones a ON a.id = al.id_atenciones
                    JOIN turnos t ON t.idturno = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    JOIN alergias_nomecladas aln ON aln.id=al.id_alergias_nomecladas
                    JOIN alergia_importancia ali ON ali.id=al.id_alergia_importancia
                    WHERE pa.id = ?`, [pacienteId]);
            return alergias;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // Asegúrate de que el error se propaga
        }
    }
}

module.exports = AlergiaModelo;