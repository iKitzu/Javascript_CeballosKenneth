// Definición de un objeto 'persona'
var persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
};

// Accediendo a las propiedades del objeto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Profesión:", persona.profesion);

// Llamando al método del objeto
persona.saludar();
