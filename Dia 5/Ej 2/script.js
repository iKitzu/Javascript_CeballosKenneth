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

const anchura = parseFloat(prompt("Ingresa la anchura del rectangulo (en unidades lmao):"));
const altura = parseFloat(prompt("Ingresa la altura del rectangulo (en unidades tambien ;3):"));

const RectanguloUs = new Rectangulo(anchura,altura);

const areaRectangulo = RectanguloUs.calcularArea();
console.log("\nEl area del rectangulo es:", areaRectangulo);

const perimetroRectangulo = RectanguloUs.calcularPerimetro();
console.log("\nEl perimetro del rectangulo es:", perimetroRectangulo);