//const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');

class PacienteModelo {
    constructor(id,dni,ObraSocial,estado) {
        this.id = id;
        this.dni = dni;
        this.ObraSocial = ObraSocial;
        this.estado = estado;
    }

    static async obtenerPacientePorId(pacienteId) {
        try {
            //const conexion = await crearConexion();
            const paciente = await pool.query(`
                    SELECT * 
                    FROM paciente 
                    JOIN persona on paciente.dni=persona.dni 
                    WHERE paciente.id=?;`, [pacienteId]);
            return paciente;
        } catch (error) {
            console.error('Error al obtener paciente por id:', error);
        }
    }

    static async obtenerPacientesPorTurnoId(turnoId) {
        try {
            //const conexion = await crearConexion();
            const paciente = await pool.query(`
                    SELECT * 
                    FROM turnos t
                    JOIN paciente pa ON pa.id=t.id_paciente
                    JOIN persona pe ON pe.dni=pa.dni
                    JOIN turnos_estado te ON te.id=t.id_estado 
                    WHERE t.idturno=?;`, [turnoId]);
            //console.log("paciente en el modelo:",paciente[0]);        
            return paciente;
        } catch (error) {
            console.error('Error al obtener paciente por id:', error);
        }

    }

}

module.exports = PacienteModelo