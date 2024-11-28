document.addEventListener('DOMContentLoaded', () => {
    const templateDropdown = document.getElementById('templateDropdown');
    const evolucionTexto = document.getElementById('evoluciontexto');
  
    templateDropdown.addEventListener('change', (event) => {
      const template = event.target.value;
      switch (template) {
        case 'template1':
          evolucionTexto.value = `Fecha y hora: ${paciente[0].fecha} ${paciente[0].hora_inicio} \nMotivo de la consulta: ${paciente[0].motivo} \nTratamiento recomendado: \nObservaciones: `;
          break;
        case 'template2':
          evolucionTexto.value = `Fecha: ${paciente[0].fecha} \nHora: ${paciente[0].hora_inicio} \nMotivo: ${paciente[0].motivo} \nTratamiento: \nComentarios: `;
          break;
        default:
          evolucionTexto.value = '';
          break;
      }
    });
  
    // Inicializar Quill
    const quill = new Quill('#editor', {
      theme: 'snow', // or 'bubble'
    });
  
    // Sincronizar el contenido de Quill con el textarea
    quill.on('text-change', () => {
      evolucionTexto.value = quill.root.innerHTML;
    });
  });
  