class Passageiro {
    constructor(andarPretendido) {
        this.andarPretendido = andarPretendido
    }
}

class Elevador {
    constructor() {
        this.andarAtual = 0
        this.quantidadeMaximaDePassageiros = 9
        this.listaDePassageiros = []
    }
    adicionarPassageiro(passageiro) {
        if (this.listaDePassageiros.length < this.quantidadeMaximaDePassageiros) {
            this.listaDePassageiros.push(passageiro)
            console.log(`1 passageiro que deseja ir no andar ${passageiro.andarPretendido} entrou no elevador. Agora o elevador tem ${this.listaDePassageiros.length} passageiro(s)`);
        } else {
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: 
            ${this.quantidadeMaximaDePassageiros}`)
        }
    }

    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino
        let saida = 0 // [2, 2, 2 ,3]
        for (let i = this.listaDePassageiros.length - 1; i >= 0; i--) {
            if (this.listaDePassageiros[i].andarPretendido === this.andarAtual) {
                saida++
                this.listaDePassageiros.splice(i, 1)
            }
        }
        console.log(` =========================================================== 
\nMOVIMENTAÇÃO\nAgora o elevador está no andar ${this.andarAtual}. ${saida} passageiros SAÍRAM do elevador 
\n${this.listaDePassageiros.length} passageiros CONTINUAM do elevador.`); console.log(this.listaDePassageiros)

    }
}

//Criação de: 4 objetos da classe Passageiro e 1 objeto da classe Elevador.
var passageiro1 = new Passageiro(2);
var passageiro2 = new Passageiro(2);
var passageiro3 = new Passageiro(2);
var passageiro4 = new Passageiro(3);
var elevador1 = new Elevador();
//Embarque de passageiros no elevador ainda no térreo (andar 0).
elevador1.adicionarPassageiro(passageiro1);
elevador1.adicionarPassageiro(passageiro2);
elevador1.adicionarPassageiro(passageiro3);
elevador1.adicionarPassageiro(passageiro4);
elevador1.movimentar(1); //Movimentando o elevador para o andar 1.
elevador1.movimentar(2); //Movimentando o elevador para o andar 2.
elevador1.movimentar(3); //Movimentando o elevador para o andar 3.
