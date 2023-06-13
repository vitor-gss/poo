var user = new User("Vitão", 2023, "03895124444");
var account = new Account(user.cpf, "Corrente", 32);
var bank = new Bank(account, user);

// declara inputs
const frm = document.querySelector("form");

// elementos manipuláveis
const eye = document.getElementById("eye");
const spanSaldo = document.getElementById("outSaldo");

document.addEventListener("DOMContentLoaded", () => {    // Função a ser executada quando o site carregar
    preencherSaldo();
});

function preencherSaldo() {
    // Simulando uma função para buscar o saldo bancário
    const saldo = obterSaldoBancario();

    // Preenchendo o conteúdo do span com o saldo
    spanSaldo.textContent = saldo.toLocaleString("pt-br", {style: "currency", currency:"BRL"});
}

function obterSaldoBancario() {
    return Number(bank.account.saldo);
}

frm.addEventListener("submit", (e) => { // quando o botão Adicionar saldo for criado
    e.preventDefault();
    const valor = Number(frm.inValor.value)

});


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