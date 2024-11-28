//const crearConexion = require('../config/configdb');
const pool = require('../config/configdb');

class PacienteModelo {
    constructor(id,dni,ObraSocial,estado) {
        this.id = id;
        this.dni = dni;
        this.ObraSocial = ObraSocial;
        this.estado = estado;
    }

    static async obtenerPacientePorId(pacienteId) {
        try {
            //const conexion = await crearConexion();
            const paciente = await pool.query(`
                    SELECT * 
                    FROM paciente 
                    JOIN persona on paciente.dni=persona.dni 
                    WHERE paciente.idpaciente=?;`, [pacienteId]);
            return paciente;
        } catch (error) {
            console.error('Error al obtener paciente por id:', error);
        }
    }

    /*static async obtenerPacientesPorTurnoId(turnoId) {
        try {
            //const conexion = await crearConexion();
            const paciente = await pool.query(`
                    SELECT * 
                    FROM turnos t
                    JOIN paciente pa ON pa.idpaciente=t.idpaciente
                    JOIN persona pe ON pe.dni=pa.dni
                    JOIN turnos_estado te ON te.id=t.id_estado 
                    WHERE t.idturno=?;`, [turnoId]);
            console.log("paciente en el modelo:", paciente[0]);
            console.log("idturno en el modelo:", paciente[0].idturno);
            console.log("fecha en el modelo:", paciente[0].fecha);
            const motivodeconsulta = paciente[0].motivo;
            console.log("motivo en el modelo:", motivodeconsulta);        
            // Verifica el tipo de dato y la existencia de la propiedad
            console.log("Tipo de idpaciente:", typeof paciente[0].idpaciente);

            // Acceso seguro a la propiedad
            const idPaciente = paciente[0].idpaciente || 'ID de paciente no encontrado';

            console.log("id del paciente en el modelo:", idPaciente); 

            return paciente;
        } catch (error) {
            console.error('Error al obtener paciente por id:', error);
        }

    }*/

        static async obtenerPacientesPorTurnoId(turnoId) {
            try {
                const [rows, fields] = await pool.query(`
                    SELECT * 
                    FROM turnos t
                    JOIN paciente pa ON pa.idpaciente=t.idpaciente
                    JOIN persona pe ON pe.dni=pa.dni
                    JOIN turnos_estado te ON te.id=t.id_estado 
                    WHERE t.idturno=?;`, [turnoId]);
                
                //console.log("Estructura completa de rows:", JSON.stringify(rows, null, 2));
                
                
                if (rows.length > 0) {
                   //console.log("paciente en el modelo:", rows[0]);
                    //console.log("idpaciente en el modelo:", rows[0].idpaciente);      
                    
                    // Verifica el tipo de dato y la existencia de la propiedad
                    //console.log("Tipo de idpaciente:", typeof rows[0].idpaciente);
        
                    // Acceso seguro a la propiedad
                    const idPaciente = rows[0].idpaciente || 'ID de paciente no encontrado';
        
                    console.log("id del paciente en el modelo:", idPaciente); 
        
                    return rows;
                } else {
                    console.log("No se encontraron pacientes para el turno dado.");
                    return [];
                }
            } catch (error) {
                console.error('Error al obtener paciente por id:', error);
            }
        }
        

}

module.exports = PacienteModelo