const crearConexion = require('../config/configdb');

class HCEModelo {
    
    static async obtenerHCE() {
        try {
            const conexion = await crearConexion();
            const [hce] = await conexion.query(`SELECT * FROM hce;`);
            return hce;
        } catch (error) {
            console.error('Error al obtener HCE:', error);
        }
    }
}

module.exports = HCEModelo;