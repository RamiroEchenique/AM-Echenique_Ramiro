const PacienteModelo = require('../models/pacientemodelo');
const EvolucionModelo = require('../models/evolucionmodelo1');
const DiagnosticoModelo = require('../models/diagnosticomodelo');
const AlergiaModelo = require('../models/alergiamodelo');
const AntecedenteModelo = require('../models/antecedentemodelo');
const HabitoModelo = require('../models/habitomodelo');
const MedicamentoModelo = require('../models/medicamentomodelo');
const AtencionModelo = require('../models/atencionmodelo');
//const e = require('express');
//const moment = require('moment');

class PacienteController {
    static async obtenerPacienteyHCE(req, res) {
        try {
            console.log("----inicio paciente controller - obtener paciente----");
            //Paciente
            const pacienteId = req.params.pacienteId;
            console.log("pacienteId:", pacienteId);
            const paciente = await PacienteModelo.obtenerPacientePorId(pacienteId);
            paciente[0].forEach(paciente => { paciente.fecha_nacimiento = new Date(paciente.fecha_nacimiento).toLocaleDateString('es-AR'); });
            console.log("paciente:", paciente[0]);
            //HCE:Evoluciones
            const evoluciones = await EvolucionModelo.obtenerEvoluciones(pacienteId);
            evoluciones[0].forEach(evolucion => { evolucion.fecha = new Date(evolucion.fecha).toLocaleDateString('es-AR'); });
            console.log("evoluciones:", evoluciones[0]);
            //HCE:Diagnostico
            const diagnosticos = await DiagnosticoModelo.obtenerdiagnosticos(pacienteId);
            diagnosticos[0].forEach(diagnostico => { diagnostico.fecha = new Date(diagnostico.fecha).toLocaleDateString('es-AR'); });
            console.log("diagnosticos:", diagnosticos[0]);
            //HCE:Alergias
            const alergias = await AlergiaModelo.obtenerAlergias(pacienteId);
            alergias[0].forEach(alergia => {
                alergia.fecha = alergia.fecha ? new Date(alergia.fecha).toLocaleDateString('es-AR') : "-";
                alergia.fecha_desde = alergia.fecha_desde ? new Date(alergia.fecha_desde).toLocaleDateString('es-AR') : "-";
                alergia.fecha_hasta = alergia.fecha_hasta ? new Date(alergia.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
            console.log("alergias:", alergias[0]);
            //HCE:Antecedentes
            const antecedentes = await AntecedenteModelo.obtenerAntecedentes(pacienteId);
            antecedentes[0].forEach(antecedente => {
                antecedente.fecha = antecedente.fecha ? new Date(antecedente.fecha).toLocaleDateString('es-AR') : "-";
                antecedente.fecha_desde = antecedente.fecha_desde ? new Date(antecedente.fecha_desde).toLocaleDateString('es-AR') : "-";
                antecedente.fecha_hasta = antecedente.fecha_hasta ? new Date(antecedente.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
              
            console.log("antecedentes:", antecedentes[0]);
            //HCE:Habitos
            const habitos = await HabitoModelo.obtenerhabitos(pacienteId);
            habitos[0].forEach(habito => {
                habito.fecha = habito.fecha ? new Date(habito.fecha).toLocaleDateString('es-AR') : "-";
                habito.fecha_desde = habito.fecha_desde ? new Date(habito.fecha_desde).toLocaleDateString('es-AR') : "-";
                habito.fecha_hasta = habito.fecha_hasta ? new Date(habito.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
              
            console.log("habitos:", habitos[0]);
            //HCE:Medicamentos
            const medicamentos = await MedicamentoModelo.obtenermedicamentos(pacienteId);
            medicamentos[0].forEach(medicamento => { medicamento.fecha = new Date(medicamento.fecha).toLocaleDateString('es-AR'); });
            console.log("medicamentos:", medicamentos[0]);

            const datos = { paciente: paciente[0], 
                            evoluciones: evoluciones[0], 
                            diagnosticos: diagnosticos[0], 
                            alergias: alergias[0], 
                            antecedentes: antecedentes[0], 
                            habitos: habitos[0],
                            medicamentos: medicamentos[0] };
    
            res.render('hce/listar_hce', datos);
            console.log("----fin paciente controller - obtener paciente----");
        }catch (error) {
            
        }
    }

    static async mostrarAtencion(req, res) {
        try {
            console.log("----inicio paciente controller - mostrar atencion----");
            //Paciente
            const turnoId = req.params.turnoId;
            console.log("turnoId:", turnoId);
            // Paciente
            const paciente = await PacienteModelo.obtenerPacientesPorTurnoId(turnoId);
            paciente.forEach(p => { 
                p.fecha = new Date(p.fecha).toLocaleDateString('es-AR'); 
                p.fecha_nacimiento = new Date(p.fecha_nacimiento).toLocaleDateString('es-AR'); 
                p.edad = calcularEdad(p.fecha_nacimiento); });
            
            console.log("paciente de mostrar atencion :", paciente);
            //console.log("ID del paciente:", paciente.idpaciente);
            console.log("ID del paciente[0]:", paciente[0].idpaciente);
            //evoluciones
            const evoluciones = await EvolucionModelo.obtenerEvoluciones(paciente[0].idpaciente);
            evoluciones[0].forEach(evolucion => { evolucion.fecha = new Date(evolucion.fecha).toLocaleDateString('es-AR'); });
            console.log("evoluciones:", evoluciones[0]);
            //HCE:Diagnostico
            const diagnosticos = await DiagnosticoModelo.obtenerdiagnosticos(paciente[0].idpaciente);
            diagnosticos[0].forEach(diagnostico => { diagnostico.fecha = new Date(diagnostico.fecha).toLocaleDateString('es-AR'); });
            console.log("diagnosticos:", diagnosticos[0]);
            //HCE:Alergias
            const alergias = await AlergiaModelo.obtenerAlergias(paciente[0].idpaciente);
            alergias[0].forEach(alergia => {
                alergia.fecha = alergia.fecha ? new Date(alergia.fecha).toLocaleDateString('es-AR') : "-";
                alergia.fecha_desde = alergia.fecha_desde ? new Date(alergia.fecha_desde).toLocaleDateString('es-AR') : "-";
                alergia.fecha_hasta = alergia.fecha_hasta ? new Date(alergia.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
            console.log("alergias:", alergias[0]);
            //HCE:Antecedentes
            const antecedentes = await AntecedenteModelo.obtenerAntecedentes(paciente[0].idpaciente);
            antecedentes[0].forEach(antecedente => {
                antecedente.fecha = antecedente.fecha ? new Date(antecedente.fecha).toLocaleDateString('es-AR') : "-";
                antecedente.fecha_desde = antecedente.fecha_desde ? new Date(antecedente.fecha_desde).toLocaleDateString('es-AR') : "-";
                antecedente.fecha_hasta = antecedente.fecha_hasta ? new Date(antecedente.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
              
            console.log("antecedentes:", antecedentes[0]);
            //HCE:Habitos
            const habitos = await HabitoModelo.obtenerhabitos(paciente[0].idpaciente);
            habitos[0].forEach(habito => {
                habito.fecha = habito.fecha ? new Date(habito.fecha).toLocaleDateString('es-AR') : "-";
                habito.fecha_desde = habito.fecha_desde ? new Date(habito.fecha_desde).toLocaleDateString('es-AR') : "-";
                habito.fecha_hasta = habito.fecha_hasta ? new Date(habito.fecha_hasta).toLocaleDateString('es-AR') : "-";
              });
              
            console.log("habitos:", habitos[0]);
            //HCE:Medicamentos
            const medicamentos = await MedicamentoModelo.obtenermedicamentos(paciente[0].idpaciente);
            medicamentos[0].forEach(medicamento => { medicamento.fecha = new Date(medicamento.fecha).toLocaleDateString('es-AR'); });
            console.log("medicamentos:", medicamentos[0]);

            const datos = { paciente: paciente[0], 
                            evoluciones: evoluciones[0], 
                            diagnosticos: diagnosticos[0], 
                            alergias: alergias[0], 
                            antecedentes: antecedentes[0], 
                            habitos: habitos[0],
                            medicamentos: medicamentos[0] };

            res.render('hce/crear_atencion', datos);   
            
            //res.render('hce/crear_atencion', {paciente: paciente[0]}); 
            console.log("----fin paciente controller - mostrar atencion----");
        } catch (error) {  
            console.error('Error al crear atención:', error); 
        }

    }

    static async guardarAtencion (req, res) {
        try {
            console.log("----inicio paciente controller - guardar atencion----");
            const turnoId = req.params.turnoId;     console.log("Guardar atencion - turnoId:", turnoId);
            const evoluciontexto = req.body.evoluciontexto; console.log("Guardar atencion - evoluciontexto:", evoluciontexto);
            /*const atencion = await AtencionModelo.obtenerPorIdTurno(turnoId);
            console.log("Guardar atencion - atencion:", atencion[0]);*/
            // Crear la atención y obtener el ID generado 
            const atencionId = await AtencionModelo.crear(turnoId);     console.log("Guardar atención - atencionId:", atencionId);
            
            if(atencionId){ // Si se creo la atencion hacer...
                // Crear la evolucion usando el id de la atención recien creada
                const evolucion = await EvolucionModelo.crear(atencionId, evoluciontexto);     console.log("Guardar evolucion - evolucion:", evolucion);
                if(evolucion){
                    console.log("Evolucion creada con exito");
                    res.redirect(`/pacientes/atender/${turnoId}`);
                }else{
                    console.log("No se pudo crear la evolucion");
                }
            }else{
                console.log("No se pudo crear la atencion");
                
            }
            /*if(AtencionModelo.crear(turnoId)){
                console.log("Atencion creada con exito");
                if(EvolucionModelo.crear(turnoId, evoluciontexto)){
                    console.log("Evolucion creada con exito");
                }
                
                res.redirect(`/pacientes/atender/${turnoId}`);
            }*/
            console.log("----fin paciente controller - guardar atencion----");
        }catch (error) {
            console.error('Error al guardar atencion:', error);
        }   
    }

    
}


const calcularEdad = (fechaNacimiento) => {
    //console.log("calcularEdad - fechaNacimiento:", fechaNacimiento);
    
    const partesFecha = fechaNacimiento.split('/');
    const fechaNacimientoObj = new Date(partesFecha[2], partesFecha[1] - 1, partesFecha[0]);
    
    //console.log("calcularEdad - fechaNacimientoObj:", fechaNacimientoObj);
  
    const hoy = new Date();
    //console.log("calcularEdad - hoy:", hoy);
  
    let edad = hoy.getFullYear() - fechaNacimientoObj.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNacimientoObj.getMonth();
  
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimientoObj.getDate())) {
      edad--;
    }
  
    //console.log("calcularEdad - edad:", edad);
    return edad;
  };
  
  

module.exports = PacienteController