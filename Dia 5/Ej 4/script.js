console.log("======= Ejercicio 4 =======");

class bankAccount{
    constructor(accountNumber, initialBal) {
        this.accountNumber=accountNumber;
        this.Bal=initialBal;    
    }

    deposit(cant) {
        if (cant >0){
            this.saldo += cant;
            console.log('Se depositaron ${cant} Robux ala cuenta')
        } else {
            console.log("La cantidad debe ser mayor que 0 (jaja pobre)")
        }
    }
    
    withdraw(cant){
        if (cant >0 && cant <= this.Bal) {
            this.Bal -= cant;
            console.log("Se retiraron %{cant} Robux de la cuenta")
        }
        else {
            console.log("No se puede retirar, fondos insuficientes")
        }
    }

    ShowDetails() {
        console.log('Account Number: ${this.accountNumber}')
        console.log('Balance Avaliable ${this.Bal} Robux')
    }
}

function obtainCant(message) {
    let cant= parseFloat(prompt(message));
    while(isNaN(cant) || cant <= 0) {
        cant = parseFloat(prompt("Porfavor, ingresa una cantidad valida (mayor que 0"));
    }
    return cant;
}

const accountNumber=prompt("Ingrese el numero de cuenta:");
const initialBal=obtainCant("Ingresa el saldo inicial de la cuenta:");

const Account=new bankAccount(accountNumber, initialBal);

console.log("\nDetalles de la cuenta:")
Account.ShowDetails();

