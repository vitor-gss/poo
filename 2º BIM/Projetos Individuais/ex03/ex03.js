class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    ligar(){
        console.log("O carro está ligado")
    }
    desligar(){
        console.log("O carro está desligado");
    }
    acelerar(){
        console.log("O carro está acelerando")
    }
}