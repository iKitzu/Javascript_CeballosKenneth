document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("crud-form");
  const tablaDatos = document.getElementById("datos-guardados");

  // Recuperar los datos guardados del localStorage y mostrarlos en la tabla
  const datosGuardados = JSON.parse(localStorage.getItem("datos"));
  if (datosGuardados) {
    datosGuardados.forEach(dato => {
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
        <td>${dato.nombre}</td>
        <td>${dato.apellido}</td>
        <td>${dato.ruta}</td>
        <td>${dato.edad}</td>
      `;
      tablaDatos.appendChild(nuevaFila);
    });
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const ruta = document.getElementById("ruta").value;
    const edad = document.getElementById("edad").value;

    const nuevoDato = { nombre, apellido, ruta, edad };

    // Guardar el nuevo dato en el localStorage
    let datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
    datosGuardados.push(nuevoDato);
    localStorage.setItem("datos", JSON.stringify(datosGuardados));

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
