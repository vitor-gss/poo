const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => { // Calcular área
    e.preventDefault()
    resp2.textContent = ""
    let retangulo = new Retangulo()
    let comprimento = Number(frm.comprimento.value)
    let largura = Number(frm.largura.value)
    resp1.textContent = `A área do retângulo é: ${retangulo.calcularArea(comprimento, largura)}`
})

frm.btPerimetro.addEventListener("click", () => {
    let retangulo = new Retangulo()
    let comprimento = Number(frm.comprimento.value)
    let largura = Number(frm.largura.value)
    resp2.textContent = `O perímetro do retângulo é: ${retangulo.calcularPerimetro(comprimento, largura)}`
})