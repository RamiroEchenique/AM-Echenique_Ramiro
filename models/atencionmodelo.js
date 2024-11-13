const crearConexion = require('../config/configdb');

class AtencionModelo {
    static async crear(turnoId) {
        try {
            const conexion = await crearConexion();
    
            // Generar la fecha y hora actual
            const fechaActual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
            const horaActual = new Date().toLocaleTimeString('en-GB', { hour12: false }); // Formato HH:MM:SS
    
            const atencion = await conexion.query(
                'INSERT INTO `atenciones`(`fecha`, `hora`, `id_turnos`) VALUES (?, ?, ?)',
                [fechaActual, horaActual, turnoId]);
            
            return atencion.affectedRows == 1; // Retorna true si se creó la atención
        } catch (error) {
            console.error('Error al crear atencion:', error);
        }
    }
    

}

module.exports = AtencionModelo