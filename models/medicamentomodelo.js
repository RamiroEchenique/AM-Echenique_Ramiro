const crearConexion = require('../config/configdb');

class MedicamentoModelo{
    static async obtenermedicamentos(pacienteId) {
        try {
            console.log("pacienteId de obtener medicamentos: ",pacienteId)
            const conexion = await crearConexion();
            const medicamentos = await conexion.query(`
                    SELECT a.fecha, a.hora, t.motivo, m.nombre_generico,m.nombre_comercial,m.indicacion, pa.dni,pe.nombre,pe.apellido
                    FROM medicamentos m
                    JOIN atenciones a ON a.id = m.id_atenciones
                    JOIN turnos t ON t.idturno = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    JOIN agenda ag on ag.id=t.id_agenda
                    JOIN medico_especialidad me ON me.matricula=ag.id_medico_especialidad
                    JOIN medico med ON med.id=me.id_medico
                    JOIN persona pe ON pe.dni=med.dni
                    WHERE pa.id = ?`, [pacienteId]);
            return medicamentos;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; 
        }
    }
}

module.exports = MedicamentoModelo;