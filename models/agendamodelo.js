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

}

module.exports = AgendaModelo;