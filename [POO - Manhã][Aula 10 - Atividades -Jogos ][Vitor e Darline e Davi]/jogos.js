let jogo1 = {
    nome: "Among Us",
    criador: "InnerSloth",
    etaria: "Livre",
    ano: 2018,
    sinopse: "Among Us é um jogo eletrônico online, dos gêneros jogo em grupo e sobrevivência, desenvolvido e publicado pelo estúdio de jogos estadunidense InnerSloth.",
    poster: "among.jpg"
}
let jogo2 = {
    nome: "Kogama",
    criador: "Multiverse ApS",
    etaria: "Livre",
    ano: 2011,
    sinopse: "KoGaMa é uma das maiores fontes dos melhores jogos criados pelos usuários incluindo jogos de Parkour, jogos divertidos, jogos tipo arcade, jogos multi jogador, jogos de internet, jogos de tiro, jogos RPG, jogos de corrida, jogos de aventura e muito mais.",
    poster: "kogama.png"
}
let jogo3 = {
    nome: "SuperMario 64",
    criador: "Nintendo",
    etaria: "Livre",
    ano: 1996,
    sinopse: "Super Mario 64 é um jogo eletrônico de plataforma desenvolvido e publicado pela Nintendo. Lançado em 1996 para o Nintendo 64, é o primeiro título da série Super Mario a oferecer gráficos tridimensionais.",
    poster: "mario.jfif"
}
let jogo4 = {
    nome: "Super Bomberman 4",
    criador: "Nintendo",
    etaria: "Livre",
    ano: 1996,
    sinopse: "Super Bomberman 4 é o quarto jogo da série Bomberman para SNES, foi lançado em 1996.",
    poster: "bomb.jfif"
}
let jogo5 = {
    nome: "Hearts Of Iron",
    criador: "Paradox Interactive",
    etaria: "10+",
    ano: 2011,
    sinopse: "Desenvolvido por uma equipe de modders experientes do fórum Paradox, Darkest Hour é um jogo independente de Hearts of Iron. O jogo apresenta uma mistura de campanhas curtas e profundas nos capítulos mais sombrios do século XX. Jogue desde a eclosão da Grande Guerra até o início da Guerra Fria.",
    poster: "hoi.jpg"
}
let jogo6 = {
    nome: "Banjo-Tooie",
    criador: "Rare, 4J Studio",
    etaria: "Livre",
    ano: 2000,
    sinopse: "Banjo-Tooie é um jogo eletrônico de plataforma desenvolvido pela Rare e originalmente lançado para o console Nintendo 64 em 2000. É o segundo jogo da série Banjo-Kazooie e a sequência de Banjo-Kazooie.",
    poster: "banjo.jfif"
}

const jogos = [jogo1, jogo2, jogo3, jogo4, jogo5, jogo6]
for(let i = 0; i < jogos.length; i++){
    document.write(`
        <div class="card">
            <img src="./img/${jogos[i].poster}">
            <h2>${jogos[i].nome}</h2>
            <p>${jogos[i].criador}</p>
            <p>${jogos[i].etaria}</p>
            <p>${jogos[i].ano}</p>
            <p class="sinopse">${jogos[i].sinopse}</p>
        </div>
    `)
}