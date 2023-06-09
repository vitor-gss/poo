class Retangulo {
    constructor(comprimento, largura) {
        this.comprimento = comprimento;
        this.largura = largura;
    }
    calcularArea(comprimento, largura) {
        let area = comprimento * largura
        return area
    }
    calcularPerimetro(comprimento, largura) {
        let perimetro = 2 * (comprimento + largura)
        return perimetro
    }
}