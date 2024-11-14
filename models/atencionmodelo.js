const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');

class AtencionModelo {
    static async obtenerPorIdTurno(turnoId) {
        try {
            console.log("AtencionModelo.obtenerPorIdTurno - turnoId:", turnoId);
            //const conexion = await crearConexion();
            const atenciones = await pool.query('SELECT * FROM atenciones WHERE id_turnos = ?', [turnoId]);
            return atenciones;
        }catch (error) {
            console.error('Error al obtener atenciones por id turno:', error);
        }    
    }
    static async crear(turnoId) {
        try {
            //const conexion = await crearConexion();
    
            // Generar la fecha y hora actual
            const fechaActual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
            const horaActual = new Date().toLocaleTimeString('en-GB', { hour12: false }); // Formato HH:MM:SS
    
            const atencion = await pool.query(
                'INSERT INTO `atenciones`(`fecha`, `hora`, `id_turnos`) VALUES (?, ?, ?)',
                [fechaActual, horaActual, turnoId]);
            console.log("AtencionModelo.crear - atencion:", atencion);
            console.log("AtencionModelo.crear - atencion.insertId:", atencion[0].insertId);
            //return atencion.affectedRows == 1; // Retorna true si se creó la atención
            return atencion[0].insertId; // Retorna el ID de la atención recién creada
        } catch (error) {
            console.error('Error al crear atencion:', error);
        }
    }
    

}

module.exports = AtencionModelo