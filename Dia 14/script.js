document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("crud-form");
  const tablaDatos = document.getElementById("datos-guardados");
  const editarModal = new bootstrap.Modal(document.getElementById("editarModal"));

  function renderizarDatosGuardados() {
    tablaDatos.innerHTML = "";

    const datosGuardados = JSON.parse(localStorage.getItem("datos"));
    if (datosGuardados) {
      datosGuardados.forEach((dato, index) => {
        const nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
          <td>${dato.nombre}</td>
          <td>${dato.apellido}</td>
          <td>${dato.ruta}</td>
          <td>${dato.edad}</td>
          <td>
            <button class="btn btn-danger btn-eliminar" data-index="${index}">Eliminar</button>
            <button class="btn btn-primary btn-editar" data-index="${index}">Editar</button>
          </td>
        `;
        tablaDatos.appendChild(nuevaFila);
      });
    }
  }

  renderizarDatosGuardados();

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const ruta = document.getElementById("ruta").value;
    const edad = document.getElementById("edad").value;

    const nuevoDato = { nombre, apellido, ruta, edad };

    let datosGuardados = JSON.parse(localStorage.getItem("datos")) || [];
    datosGuardados.push(nuevoDato);
    localStorage.setItem("datos", JSON.stringify(datosGuardados));

    renderizarDatosGuardados();

    form.reset();
  });

  tablaDatos.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-eliminar")) {
      const index = event.target.getAttribute("data-index");
      let datosGuardados = JSON.parse(localStorage.getItem("datos"));
      datosGuardados.splice(index, 1);
      localStorage.setItem("datos", JSON.stringify(datosGuardados));
      renderizarDatosGuardados();
    }
    if (event.target.classList.contains("btn-editar")) {
      const index = event.target.getAttribute("data-index");
      let datosGuardados = JSON.parse(localStorage.getItem("datos"));
      const dato = datosGuardados[index];
      document.getElementById("editar-nombre").value = dato.nombre;
      document.getElementById("editar-apellido").value = dato.apellido;
      document.getElementById("editar-ruta").value = dato.ruta;
      document.getElementById("editar-edad").value = dato.edad;
      document.getElementById("editar-indice").value = index;
      editarModal.show();
    }
  });

  document.getElementById("btn-guardar-editar").addEventListener("click", function() {
    const index = document.getElementById("editar-indice").value;
    let datosGuardados = JSON.parse(localStorage.getItem("datos"));
    datosGuardados[index] = {
      nombre: document.getElementById("editar-nombre").value,
      apellido: document.getElementById("editar-apellido").value,
      ruta: document.getElementById("editar-ruta").value,
      edad: document.getElementById("editar-edad").value
    };
    localStorage.setItem("datos", JSON.stringify(datosGuardados));
    renderizarDatosGuardados();
    editarModal.hide();
  });
});
