console.log("======= Ejercicio 1 =======");

class persona {
    constructor (nombre, edad, pais) {
        this.nombre=nombre
        this.edad=edad
        this.pais=pais
    }

    mostrardetalles() {
        console.log (`Nombre: ${this.nombre}, Edad: ${this.edad}, País: ${this.pais}`);
    }
}

const persona1 = new persona ('Juan','30', 'Colombia');
const persona2 = new persona ('Pedro','22', 'Burgundoforilandia');

console.log ("\nDetalles de la Persona 1:");
persona1.mostrardetalles();

console.log("\nDetalles de la persona 2:");
persona2.mostrardetalles();
