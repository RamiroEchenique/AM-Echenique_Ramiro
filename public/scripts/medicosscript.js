
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
  
