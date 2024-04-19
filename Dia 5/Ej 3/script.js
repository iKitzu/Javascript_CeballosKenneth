console.log("======= Ejercicio 3 =======");

class Vehicle {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
}

class Coche extends Vehicle {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Numero de Puertas: ${this.numeroPuertas}`);
    }
}

const miVehiculo = new Vehicle("Toyota", "Toyota2", 2020);

console.log("\nDetalles del Vehiculo:");
miVehiculo.mostrarDetalles();

const miCoche = new Coche("Toyotan't", "Toyota3", 2024, 4);

console.log("\nDetalles del Coche:");
miCoche.mostrarDetalles();
