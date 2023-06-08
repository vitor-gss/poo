let carro1 = {
    modelo: "Ka",
    marca: "Ford",
    ano: 2018,
    preco: 40000,
    foto: "ka-2015.png"
}

let carro2 = {
    modelo: "Civic",
    marca: "Honda",
    ano: 2022,
    preco: 67000,
    foto: "civic-2022.png"
}

let carro3 = {
    modelo: "Gol",
    marca: "VW",
    ano: 2020,
    preco: 55000,
    foto: "Gol-2020.png"
}

let carro4 = {
    modelo: "Corolla",
    marca: "Toyota",
    ano: 2019,
    preco: 65000,
    foto: "corolla-2019.png"
}

let carro5 = {
    modelo: "HB20",
    marca: "Hyundai",
    ano: 2015,
    preco: 30000,
    foto: "HB20-2015.png"
}
let carro6 = {
    modelo: "Ferrari",
    marca: "Ferrari",
    ano: 2019,
    preco: "3.4M",
    foto: "ferrari2019.png"
}
let carro7 = {
    modelo: "Siena",
    marca: "Fiat",
    ano: 2020,
    preco: 68000,
    foto: "siena2020.png"
}
let carro8 = {
    modelo: "Mustang",
    marca: "Ford",
    ano: 2022,
    preco: 566000,
    foto: "mustang2022.png"
}
let carro9 = {
    modelo: "Uno",
    marca: "Fiat",
    ano: 2021,
    preco: 85000,
    foto: "uno2021.png"
}

let listaDeCarros = [];
listaDeCarros.push(carro1,carro2,carro3,carro4,carro5,carro6,carro7,carro8,carro9);
for(let i = 0; i < listaDeCarros.length; i++){
    document.write(`<div class="card">
    <img src=./img/${listaDeCarros[i].foto}>
    <h2 class="modelo">${listaDeCarros[i].modelo}</h2> 
    <p class="marca">${listaDeCarros[i].marca}</p> 
    <p class="ano">${listaDeCarros[i].ano}</p>
    <p class=preco> R$ ${listaDeCarros[i].preco}</p>
 </div>`)
}