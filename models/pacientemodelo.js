const crearConexion = require('../config/configdb');

class PacienteModelo {
    constructor(id,dni,ObraSocial,estado) {
        this.id = id;
        this.dni = dni;
        this.ObraSocial = ObraSocial;
        this.estado = estado;
    }

    static async obtenerPacientePorId(pacienteId) {
        try {
            const conexion = await crearConexion();
            const paciente = await conexion.query(`
                    SELECT * 
                    FROM paciente 
                    JOIN persona on paciente.dni=persona.dni 
                    WHERE paciente.id=?;`, [pacienteId]);
            return paciente;
        } catch (error) {
            console.error('Error al obtener paciente por id:', error);
        }
    }

}

module.exports = PacienteModelo