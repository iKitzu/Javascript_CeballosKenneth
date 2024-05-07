document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("crud-form");
    const tablaDatos = document.getElementById("datos-guardados");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const ruta = document.getElementById("ruta").value;
      const edad = document.getElementById("edad").value;
  
      // Crear una nueva fila y agregar celdas con los datos guardados
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${ruta}</td>
        <td>${edad}</td>
      `;
  
      // Agregar la nueva fila a la tabla de datos
      tablaDatos.appendChild(nuevaFila);
  
      // Limpiar el formulario
      form.reset();
    });
  });
  