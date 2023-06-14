// declara inputs
const frm = document.querySelector("form");

// elementos manipuláveis
const eye = document.getElementById("eye");
const spanSaldo = document.getElementById("outSaldo");

document.addEventListener("DOMContentLoaded", () => {    // Função a ser executada quando o site carregar
    preencherSaldo(); // Mostra o saldo do cliente
});

function preencherSaldo() {
    // Simulando uma função para buscar o saldo bancário
    const saldo = obterSaldoBancario();

    // Preenchendo o conteúdo do span com o saldo
    spanSaldo.textContent = saldo.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

function obterSaldoBancario() {
    return Number(bank.account.saldo);
}

frm.addEventListener("submit", (e) => { // quando o botão Adicionar saldo for acionado
    e.preventDefault();
    const valor = Number(frm.inValor.value)
    bank.account.saldo += valor // Soma o saldo com o valor informado
    preencherSaldo() // atualiza o saldo
});

frm.btRemoverSaldo.addEventListener("click", () => { //Remove o saldo
    if (!frm.checkValidity()) { // Verifica se os valores foram digitados corretamente
        alert("Insira os valores corretamente")
        return
    }
    const valor = Number(frm.inValor.value)
    if (valor > bank.account.saldo) {
        alert("O valor informado é maior que o saldo atual. Insira um valor menor ou igual ao saldo atual")
        return
    }
    bank.account.saldo -= valor // Subtrai o saldo pelo o valor informado
    preencherSaldo() // atualiza o saldo
})
function mudarOlhos() {
    if (eye.className == "fa-solid fa-eye") {
        spanSaldo.classList.add("ocultarSaldo")
        eye.className = "";
        eye.className = "fa-solid fa-eye-slash";

    } else {
        spanSaldo.classList.remove("ocultarSaldo")
        eye.className = "";
        eye.className = "fa-solid fa-eye";
    }
}