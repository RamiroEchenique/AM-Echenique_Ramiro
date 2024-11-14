/*const mysql = require('mysql2/promise');

const crearConexion = async () => {
    try {
        const conexion = await mysql.createConnection({
            host: 'b0joms2rixexqwtbnoht-mysql.services.clever-cloud.com', // Base de datos en Clever Cloud
            database: 'b0joms2rixexqwtbnoht',
            user: 'uoj6q5ux33jvh9is',
            password: 'stoiSSFGtYtL9yE4K1hP'
        
        });
        
        console.log('Conexión exitosa a la base de datos en Clever Cloud.');
        return conexion;
    } catch (error) {
        console.error('Error al conectar a la base de datos en Clever Cloud:', error);
        throw error; // Propaga el error 
    }
};

/*const crearConexion = async () => {
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
};*/

//module.exports = crearConexion;

// con pool de conexiones
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'b0joms2rixexqwtbnoht-mysql.services.clever-cloud.com',
    database: 'b0joms2rixexqwtbnoht',
    user: 'uoj6q5ux33jvh9is',
    password: 'stoiSSFGtYtL9yE4K1hP',
    waitForConnections: true,
    connectionLimit: 5, // Límite de conexiones
    queueLimit: 0 // Sin límite de solicitudes en espera
    
});

module.exports = pool;