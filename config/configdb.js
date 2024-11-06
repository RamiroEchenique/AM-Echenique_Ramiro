const mysql = require('mysql2/promise');

/*const crearConexion = async () => {
    try {
        const conexion = await mysql.createConnection({
            host: 'bfxcr1sturuzhpc5rqor-mysql.services.clever-cloud.com', // Base de datos en Clever Cloud
            user: 'ueiaarvwywjrdceh',
            password: 'bMPIk2P0ayO433yitzD2',
            database: 'bfxcr1sturuzhpc5rqor'
        });
        
        console.log('Conexión exitosa a la base de datos en Clever Cloud.');
        return conexion;
    } catch (error) {
        console.error('Error al conectar a la base de datos en Clever Cloud:', error);
        throw error; // Propaga el error 
    }
};*/

const crearConexion = async () => {
    try {
        const conexion = await mysql.createConnection({
            host: 'localhost', // base de datos local en xampp 
            user: 'root',
            password: '',
            database: 'til2-atencion_medica1'
        });
        
        console.log('Conexión exitosa a la base de datos de atenciones medicas.');
        return conexion;
    } catch (error) {
        console.error('Error al conectar a la base de datos de atenciones medicas:', error);
        throw error; // Propaga el error 
    }
};

module.exports = crearConexion;