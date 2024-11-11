const crearConexion = require('../config/configdb');

class EvolucionModelo {
    constructor(id, descripcion, id_atenciones) {
        this.id = id;        
        this.descripcion = descripcion;        
        this.id_atenciones = id_atenciones;
    }

    static async obtenerEvoluciones(pacienteId) {
        try {
            const conexion = await crearConexion();
            const evoluciones = await conexion.query(`
                    SELECT a.fecha, a.hora, t.motivo, e.descripcion, pa.dni
                    FROM evoluciones e
                    JOIN atenciones a ON a.id = e.id_atenciones
                    JOIN turnos t ON t.id = a.id_turnos
                    JOIN paciente pa ON pa.id = t.id_paciente
                    WHERE pa.id = ?`, [pacienteId]);
            return evoluciones;
        } catch (error) {
            console.error('Error al obtener evoluciones:', error);
            throw error; // Asegúrate de que el error se propaga
        }
    }
}

module.exports = EvolucionModelo;