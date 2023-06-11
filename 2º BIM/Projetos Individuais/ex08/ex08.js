class Circulo {
    constructor(raio) {
        this.raio = raio;
        this.pi = 3.14
    }
    area() {
        console.log(this.pi * this.raio ** 2);
    }
    circunferencia() {
        console.log((2 * this.pi * this.raio).toFixed(2));
    }
}