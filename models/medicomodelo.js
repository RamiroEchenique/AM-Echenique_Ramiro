//const crearConexion = require('../config/configdb');

const pool = require('../config/configdb');

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
            //const conexion = await crearConexion();
            const [medico] = await pool.query(`
                            SELECT m.id, p.nombre, p.apellido
                            FROM medico m
	                            JOIN persona p ON m.dni = p.dni;
            `);
            return medico;
        } catch (error) {
            console.error('Error al obtener medicos:', error);
        }
    }

    static async obtenerNombreMedicoPorId(medicoId) {
        try {
            //const conexion = await crearConexion();
            const [medico] = await pool.query(`
                            SELECT * 
                            FROM medico m
	                            JOIN persona p ON m.dni=p.dni
                            WHERE m.id=?;
            `, [medicoId]);
            return medico;
        } catch (error) {
            console.error('Error al obtener medicos:', error);
        }
    }

}

module.exports = MedicoModelo;