console.log("======= Ejercicio 4 =======");

class BankAccount{
    constructor(numeroCuenta, saldoInicial) {
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldoInicial;
    }
// Depositar dinero en la cuenta :3

    depositar(cantidad) {
        if (cantidad >0){
            this.saldo += cantidad;
            console.log(`\nSe depositaron ${cantidad} Robux a la cuenta`)
        } else {
            console.log("\nLa cantidad debe ser mayor que 0 (jaja pobre)")
        }
    }
    
    // Retirar los pavos de la cuenta

    retirar(cantidad){
        if (cantidad >0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se retiraron ${cantidad} Robux de la cuenta`)
        }
        else {
            console.log("\nNo se puede retirar, fondos insuficientes")
        }
    }

    // Mostrar los detalles del pedazo de cuenta que tenemos B)

    MostrarDetalles() {
        console.log(`Account Number: ${this.numeroCuenta}`)
        console.log(`Balance Avaliable ${this.saldo} Robux`)
    }
}

function obtenerCantidad(message) {
    let cantidad= parseFloat(prompt(message));
    while(isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseFloat(prompt("Porfavor, ingresa una cantidad valida (mayor que 0)"));
    }
    return cantidad;
}

const numeroCuenta=prompt("Ingrese el numero de cuenta:");
const saldoInicial=obtenerCantidad("Ingresa el saldo inicial de la cuenta:");

const cuenta=new BankAccount(numeroCuenta, saldoInicial);

// mostrar detalles de la cuenta inicial 

console.log("\nDetalles de la cuenta:")
cuenta.MostrarDetalles();

/// solicitamos :moai:

const opcion = prompt("¿Que deseas hacer? (1: Depositar, 2: Retirar)");

if (opcion === "1") {
    
    // Realizamos el desposito 

    const cantidadDeposito = obtenerCantidad("Ingresa la cantidad a depositar:");
    cuenta.depositar(cantidadDeposito);
} else if (opcion === "2") {
    // Realizamos Retiro
    const cantidadRetiro = obtenerCantidad("Ingresa la cantidad a retirar:");
    cuenta.retirar(cantidadRetiro);
} else {
    console.log("\nOpcion no valida lol")
}

// Detalles despues de la operacion 

console.log("\nDetalles Actualziados de la Cuenta:");
cuenta.MostrarDetalles();