class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    saldoAtual() {
        console.log("Saldo atual:" + this.saldo)
    }
    depositar(deposito) {
        this.saldo = this.saldo + deposito
    }
    sacar(valor) {
        this.saldo = this.saldo - valor
    }
}

class Banco {
    constructor() {
        this.listaDeContas = []
    }
    adicionarPessoa(titular) {
        if (!this.listaDeContas.includes(titular)) {
            this.listaDeContas.push(titular)
        }else{
            alert("Usuário já cadastrado")
        }
    }
}