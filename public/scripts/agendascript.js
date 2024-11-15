// Obtener los elementos del DOM
const fechaInput = document.getElementById('fecha-turno');
const agendaSelect = document.getElementById('agenda-select');

//  event listener para el cambio de fecha y cambio de agenda
fechaInput.addEventListener('change', () => {
  actualizarTurnos();
});

agendaSelect.addEventListener('change', () => {
  actualizarTurnos();
});

// Función para establecer la fecha actual en el input de fecha
function setFechaActual() {
  const fechaEntrada = document.getElementById('fecha-turno');
  if (fechaEntrada) {
    const hoy = new Date().toISOString().split('T')[0];
    fechaEntrada.value = hoy;
    console.log("dateInput.value: ", fechaEntrada.value);
    actualizarTurnos(); // Llama a actualizarTurnos después de establecer la fecha actual
  }
}

function actualizarTurnos() {
  console.log("Actualizando turnos con fechaInput.value: ", fechaInput.value);
  console.log("Actualizando turnos con medicoId: ", medicoId);

  // Obtener el agendaId seleccionado
  const agendaId = agendaSelect.value;

  // Construir la URL con los parámetros medicoId, fecha, y agendaId
  const url = `/agendas/${medicoId}/turnos?fecha=${fechaInput.value}&agendaId=${agendaId}`;
  console.log("URL para obtener turnos:", url); // Verificar en la consola


  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Turnos actualizados:', data);
      actualizarTablaTurnos(data);  // Llamada para actualizar la tabla
    })
    .catch(error => console.error('Error al obtener turnos:', error));
}


function actualizarTablaTurnos(turnos) {
  const tbody = document.querySelector('table.table tbody');
  tbody.innerHTML = '';  // Limpia la tabla antes de llenarla

  if (turnos.length) {
      turnos.forEach(turno => {
            // Determinar la clase del estado según el valor de `estadonombre`
          const estadoClase = turno.estadonombre === 'Pendiente' 
          ? 'bg-warning' 
          : turno.estadonombre === 'Atendido' 
          ? 'bg-success' 
          : 'bg-danger';
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${turno.fecha}</td>
              <td>${turno.apellido} ${turno.nombre}</td>
              <td>${turno.motivo}</td>
              <td>${turno.hora_inicio}</td>
              <td>${turno.hora_fin}</td>
              <td><span class="badge ${estadoClase}">${turno.estadonombre}</span></td>
              <td><button class="btn btn-info" onclick="verHCE(${turno.id_paciente})">Ver</button></td>
              <td><button class="btn btn-success" onclick="Atender(${turno.idturno})">Atender</button></td>

          `;
          tbody.appendChild(row);
      });
  } else {
      const row = document.createElement('tr');
      row.innerHTML = `<td colspan="9">No hay turnos disponibles para la fecha seleccionada</td>`;
      tbody.appendChild(row);
  }
}

function verHCE(id_paciente) {
  window.location.href = `/pacientes/verhce/${id_paciente}`;
}

function Atender(turnoId) {
  window.location.href = `/pacientes/atender/${turnoId}`;
}

// Llama a la función para establecer la fecha actual
setFechaActual();

