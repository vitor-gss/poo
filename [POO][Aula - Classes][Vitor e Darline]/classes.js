class Celular{
    constructor(marca, modelo, ram, armazenamento, processador, qtdDeCameras, foto){
        this.marca = marca
        this.modelo = modelo
        this.ram = ram
        this.armazenamento = armazenamento
        this.processador = processador
        this.qtdDeCameras = qtdDeCameras + " Câmeras"
        this.foto = foto
    }

    exibirNoHtml(){

    }
}

class Tv {
    constructor(marca, modelo, tamanho, foto){
        this.marca = marca
        this.modelo = modelo
        this.tamanho = tamanho
        this.foto = foto
    }
}

class Favoritos{
    constructor(){
        this.listaDeProdutos = []
    }
    adicionarProduto(produto){
        this.listaDeProdutos.push(produto)
    }
    exibirNoHtml(){
        for (let i = 0; i < this.listaDeProdutos.length; i++) {
            document.write(`
                <div class="card">
                <img class="foto" src="img/${this.listaDeProdutos[i].foto}">
                    <div class="info">
                        <p class="marca">${this.listaDeProdutos[i].marca}</p>
                        <p class="modelo">${this.listaDeProdutos[i].modelo}</p>
                        <p class="outros">${this.listaDeProdutos[i].tamanho} polegadas</p>
                    </div>
                </div>
            `)
        }
    }
}

