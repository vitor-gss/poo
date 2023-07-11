const botao = document.querySelector("#btBotao")
const container = document.querySelector("#container")

botao.addEventListener("click", () => {
    container.removeChild(container.firstChild)
})
