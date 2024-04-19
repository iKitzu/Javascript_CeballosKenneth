console.log("======= Ejercicio 2 =======");

class Rectangulo {
    constructor(anchura, altura) {
        this.anchura=anchura;
        this.altura=altura;
    }

    calcularArea() {
        return this.anchura * this.altura;
    }

    calcularPerimetro(){
        return 2*(this.anchura + this.altura);
    }
}

