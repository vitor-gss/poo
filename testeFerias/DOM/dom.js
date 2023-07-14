var novoParagrafo = document.createElement("p");
let texto = document.createTextNode("Conteúdo")
novoParagrafo.appendChild(texto)

console.log(novoParagrafo);

let body = document.querySelector("body")

console.log(body);

body.appendChild(novoParagrafo)

// inserir em container
var container = document.querySelector("#container")

console.log(container)

var el = document.createElement("span")
el.appendChild(document.createTextNode("Texto do span"))

console.log(el)

container.appendChild(el)
