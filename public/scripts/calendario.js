function setFechaActual() {
    const fechaEntrada = document.getElementById('fecha-turno');// Obtener el elemento input de fecha
    if (fechaEntrada) {
      const hoy = new Date().toISOString().split('T')[0];// Obtener la fecha actual
      fechaEntrada.value = hoy;
      console.log("dateInput.value: ",fechaEntrada.value);
    }
  }

  // Llama a la función para establecer la fecha actual
setFechaActual();