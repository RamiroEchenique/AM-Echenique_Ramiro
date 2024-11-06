const crearConexion = require('../config/configdb');

class MedicoModelo {
    constructor(id,dni,usuario,constraseña,estado) {
        this.id = id;
        this.dni = dni;
        this.usuario = usuario;
        this.constraseña = constraseña;
        this.estado = estado;
    }


    static async obtenerMedicoPorNombre() {
        try {
            const conexion = await crearConexion();
            const [medico] = await conexion.query(`
                            SELECT m.id, p.nombre, p.apellido
                            FROM medico m
	                            JOIN persona p ON m.dni = p.dni;
            `);
            return medico;
        } catch (error) {
            console.error('Error al obtener medicos:', error);
        }
    }

}

module.exports = MedicoModelo;