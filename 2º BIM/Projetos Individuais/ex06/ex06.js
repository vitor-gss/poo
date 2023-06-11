class Contador {
    constructor(valor){
        this.valor = valor;
    }
    incrementar(valor){
        this.valor += valor
    }
    decrementar(valor){
        this.valor -= valor
    }
    exibirValor(){
        console.log(this.valor)
    }
}