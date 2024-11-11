/*// Obtener los elementos del DOM
const medicoSelect = document.getElementById('medicoSelect');
const agendabutton = document.getElementById('agendaButton');

//  event listener el click en el boton de ir a agenda
agendabutton.addEventListener('click', irAAgenda2);

function irAAgenda2() {
    const medicoId = document.querySelector("#medicoSelect").value;
    const url = `/agendas/${medicoId}`;
    
    if (medicoId) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Agendas actualizados:', data);

        })
    } else {
      alert("Por favor, seleccione un profesional.");
    }
  }*/

function seleccionarMedico() {
    const medicoId = document.querySelector("#medicoSelect").value;
    if (medicoId) {
        alert(`Profesional seleccionado con ID: ${medicoId}`);
    } else {
        alert("Por favor, seleccione un profesional.");
    }
}

function irAAgenda() {
    const medicoId = document.querySelector("#medicoSelect").value;
    console.log("funcion irAAgenda medicoId:",medicoId);
    
    if (medicoId) {
      window.location.href = `/agendas/${medicoId}`;
    } else {
      alert("Por favor, seleccione un profesional.");
    }
  }
  
