const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = frm.inUser.value;
    const password = frm.inSenha.value;
    if(verify(user, password)){
        window.location.href = "../telaInicial/telaInicial.html"
    }
})

function verify(user, password){
    
}