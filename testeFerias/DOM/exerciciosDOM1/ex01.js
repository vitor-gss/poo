const botao = document.querySelector("#btBotao")
const container = document.querySelector("#container")
botao.addEventListener("click", () => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("Novo Parágrafo"))
    container.appendChild(p)
})