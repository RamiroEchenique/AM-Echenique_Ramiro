
function seleccionarMedico() {
    const medicoId = document.querySelector("#medicoSelect").value;
    if (medicoId) {
        alert(`Profesional seleccionado con ID: ${medicoId}`);
        // Aquí puedes redirigir a otra página o actualizar la página actual con la información del médico seleccionado
        // window.location.href = `/medicos/${medicoId}/agendas`; // Ejemplo de redirección
    } else {
        alert("Por favor, seleccione un profesional.");
    }
}
