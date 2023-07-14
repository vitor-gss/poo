class Carro {
    constructor(tpCarro, tpComb) {
        this.tipo = tpCarro
        this.qtdeComb = 100
        this.ligado = false
        this.tipoComb = tpComb
    }
    info() {
        console.log("Tipo...... : " + this.tipo)
        console.log("Qtde Combus: " + this.qtdeComb);
        console.log("ligado.....: " + (this.ligado ? "Sim" : "Não"));
        console.log("Tipo combus: " + this.tipoComb);
    }
    set setLigado(t) {
        this.ligado = t;
    }
    get getLigado() {
        return this.ligado
    }
    set setComb(v) {
        if (v < 0 || v > 100) {
            console.log("Valor inválido")
        } else {
            this.qtdeComb = v
        }
    }
    get getComb() {
        return this.qtdeComb
    }
}

class CarroCombate extends Carro {
    constructor(potTiro) {
        super(2, 1) // passa os argumentos pro construtor da classe pai
        this.tiros = 1000;
        this.potTiro = potTiro;
        this.blindagem = 100;
    }
    info() {
        console.log("tiros..... : " + this.tiros)
        console.log("potTiro... : " + this.potTiro)
        console.log("blindagem. : " + this.blindagem)
        super.info() // chama o método info da classe pai
    }
}

class CarroTransporte extends Carro {
    constructor() {
        super(2, 2);
    }
}

let c1 = new CarroCombate(80)
let c2 = new CarroTransporte()
c1.setLigado = true
c1.info()
c2.info()