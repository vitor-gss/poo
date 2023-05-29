let mus1 = {
    poster: "tentative.jfif",
    nome: "Tentative",
    artistas: "System of a Dowm",
    album: "Hypnotize"
}
let mus2 = {
    poster: "dreaming.jfif",
    nome: "Dreaming",
    artistas: "System of a Dowm",
    album: "Hypnotize"
}
let mus3 = {
    poster: "we-are.jfif",
    nome: "We Are",
    artistas: "One Piece",
    album: "Single"
}
let mus4 = {
    poster: "bones.jfif",
    nome: "Bones",
    artistas: "Imagine Dragons",
    album: "Mercury – Acts 1 & 2"
}
let mus5 = {
    poster: "cavalo.jfif",
    nome: " Upa Cavalinho",
    artistas: "Galinha Pintadinha",
    album: "Galinha Pintadinha 4"
}
let mus6 = {
    poster: "detroit.jfif",
    nome: "Detroit Rock City",
    artistas: "Kiss",
    album: "Destroyer"
}
let mus7 = {
    poster: "crazy.jfif",
    nome: "crazy=genius",
    artistas: "Panic! at the Disco",
    album: "Death of a Bachelor"
}
let mus8 = {
    poster: "sol.jfif",
    nome: "Sol e a Lua",
    artistas: "kamaitachi",
    album: "Sol e a Lua"
}
let mus9 = {
    poster: "sensacao.jfif",
    nome: "Sensação",
    artistas: "1kilo",
    album: "Sensação"
}
let mus10 = {
    poster: "care.jfif",
    nome: "Careless Whisper",
    artistas: "George Michael",
    album: "Careless Whisper"
}

const musicas = [mus1, mus2, mus3, mus4, mus5, mus6, mus7, mus8, mus9, mus10]
for (let i = 0; i < musicas.length; i++) {
    document.write(`
        <div class="card">
            <img src="./img/${musicas[i].poster}">
            <div class="info">
                <h2 class="nome">${musicas[i].nome}</h2>
                <p class="artistas">${musicas[i].artistas}</p>
                <p class="album">${musicas[i].album}</p>
            </div>
        </div>
    `)
}