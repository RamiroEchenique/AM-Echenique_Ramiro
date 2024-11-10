const crearConexion = require('../config/configdb');

class TurnoModelo {
    constructor(id, id_agenda, id_paciente,fecha,motivo, hora_inicio, hora_fin, id_estado) {
        this.id = id;
        this.id_agenda = id_agenda;
        this.id_paciente = id_paciente;
        this.fecha = fecha;
        this.motivo = motivo;
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
        this.id_estado = id_estado;
    }

    static async obtenerTurnos() {
        try {
            const conexion = await crearConexion();
            const [tunos] = await conexion.execute('SELECT * FROM turnos');
            return tunos;
        } catch (error) {
            console.error('Error al obtener turnos:', error);}
        }

        static async obtenerTurnosPorFecha(fecha,id_agenda) {
            //console.log("Modelo obtenerTurnosPorFecha-fecha:",fecha);
            //console.log("Modelo obtenerTurnosPorFecha-id_agenda:",id_agenda);
            try {
                const conexion = await crearConexion();
                const turnos = await conexion.query(`
                            SELECT * 
                            FROM turnos t
                            JOIN paciente pa ON t.id_paciente=pa.id
                            JOIN persona pe ON pa.dni=pe.dni
                            JOIN turnos_estado te ON te.id=t.id_estado 
                            WHERE fecha=?
                            AND id_agenda=?`, [fecha,id_agenda]);
                return turnos;

            } catch (error) {
                console.error('Error al obtener turnos por fecha:', error);
            }
        }


}

module.exports = TurnoModelo;