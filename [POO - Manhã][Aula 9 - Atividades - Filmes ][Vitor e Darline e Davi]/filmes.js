let filme1 = {
    poster: "oMeninoQueDescobriuOVento-2019.jpg",
    nome: "O Menino que Descobriu o Vento",
    genero: "Drama",
    anoLancamento: 2019,
    diretor: "Chiwetel Ejiofor"
}
let filme2 = {
    poster: "lenin-2003.jfif",
    nome: "Adeus, Lenin",
    genero: "Drama/Comédia",
    anoLancamento: 2003,
    diretor: "Wolfgang Becker"
}
let filme3 = {
    poster: "RogueOne-2016.webp",
    nome: "Rogue One",
    genero: "Ação/Ficcão",
    anoLancamento: 2016,
    diretor: " Gareth Edwards"
}
let filme4 = {
    poster: "shrek-2001.jpg",
    nome: "Shrek",
    genero: "Fantasia/Comédia",
    anoLancamento: 2001,
    diretor: "Vicky Jenson, Andrew Adamson"
}
let filme5 = {
    poster: "Cruella.jfif",
    nome: "Cruella",
    genero: "Crime/Comédia",
    anoLancamento: 2021,
    diretor: "Craig Gillespie"
}
let filme6 = {
    poster: "robinHood.webp",
    nome: "Robin Hood",
    genero: "Aventura/Infantil",
    anoLancamento: 1973,
    diretor: "Wolfgang Reitherman"
}
let filme7 = {
    poster: "asBranquelas.webp",
    nome: "As Branquelas",
    genero: "Comédia",
    anoLancamento: 2004,
    diretor: "Keenen Ivory Wayans"
}
let filme8 = {
    poster: "galinhas.jfif",
    nome: "A Fuga das Galinhas",
    genero: "Aventura/Infantil",
    anoLancamento: 2000,
    diretor: "Nick Park, Peter Lord"
}
let filme9 = {
    poster: "olhosgato.jpg",
    nome: "Olhos de Gato",
    genero: "Fantasia/Romance",
    anoLancamento: 2020,
    diretor: "Junichi Sato, Tomotaka Shibayama"
}
let filme10 = {
    poster: "silentVoice.jpg",
    nome: "Koe no Katachi",
    genero: "Drama/Romance",
    anoLancamento: 2016,
    diretor: "Naoko Yamada"
}
const filmes = []
filmes.push(filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10)
for(let i = 0; i < filmes.length; i++) {
    document.write(`<div class="card">
    <img src=./img/${filmes[i].poster}>
    <h2 class="nome">${filmes[i].nome}</h2> 
    <p class="genero">${filmes[i].genero}</p> 
    <p class="anoLancamento">${filmes[i].anoLancamento}</p>
    <p class=diretor> ${filmes[i].diretor}</p>
 </div>`)
}

