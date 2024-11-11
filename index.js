const express = require('express');
const pug = require('pug');
const app = express();
const AgendaRouter = require('./routes/agendaroute'); //importar AgendaRouter de ./routes/agendaroute.js
const MedicoRouter = require('./routes/medicoroute');
const PacienteRouter = require('./routes/pacienteroute');

// Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', 'vistas');

// Configurar directorio de archivos estáticos
app.use(express.static('public'));
app.use(express.urlencoded()); //para poder leer datos de formularios (veer)

//app.use("/agendas", AgendaRouter);  // asociar AgendaRouter con la ruta base de /agendas
//app.use("/medicos", MedicoRouter); 
app.use("/",MedicoRouter) // Redirigir la ruta raíz al controlador de médicos
app.use("/agendas",AgendaRouter) // Asociar AgendaRouter con la ruta base de /agendas
app.use("/pacientes",PacienteRouter)

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});