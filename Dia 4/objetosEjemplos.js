// Ejemplo de practica xD

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

// Persona ->

let persona = {
    nombre: "Juan",
    edad: 30,
    genero: "masculino",
    ocupacion: "ingeniero"
};

console.log(persona.nombre); // Output: Juan
console.log(persona.edad);   // Output: 30


// Coche ->

let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    color: "azul"
};

console.log(coche.marca); // Output: Toyota
console.log(coche.modelo); // Output: Corolla

// Libro ->

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "realismo mágico",
    paginas: 432
};

console.log(libro.titulo); // Output: Cien años de soledad
console.log(libro.autor); // Output: Gabriel García Márquez

// Numero ->

let numero = 42;

console.log(numero); // Output: 42

// Funcion ->

// Función asignada a una variable
let suma = function(a, b) {
    return a + b;
};

console.log(suma(3, 5)); // Output: 8

// Método dentro de un objeto

let calculadora = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.sumar(10, 5)); // Output: 15
console.log(calculadora.restar(10, 5)); // Output: 5
