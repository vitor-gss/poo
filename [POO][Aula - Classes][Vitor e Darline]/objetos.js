const cel1 = new Celular("Xiaomi", "Redmi Note 12", "6 GB", "128 GB", "SnapDragon 685", "3", "redminote12.jpeg")
const cel2 = new Celular("Xiaomi", "Redmi Note 12 Pro", "6 GB", "256 GB", "Dimensity 1080", "3", "redminote12pro.jpeg")
const cel3 = new Celular("Xiaomi", "Redmi Note 12 Pro Plus", "8 GB", "256 GB", "Dimensity 1080", "3", "redminote12proplus.jpeg")
const cel4 = new Celular("Samsung", "Galaxy S23 Ultra", "12 GB", "1 TB", "SnapDragon 8 Gen 2", "4", "s23.jpeg")
const cel5 = new Celular("Xiaomi", "Poco X5", "6 GB", "128 GB", "SnapDragon 695", "3", "poco.jpeg")

const tv1 = new Tv("LG", "OLED83C2PSA", "83", "lg83.jpg")
const tv2 = new Tv("LG", "32LT330HBSB", "32", "32LT330HBSB.jpg")
const tv3 = new Tv("LG", "50UQ7950", "50")
const tv4 = new Tv("LG", "43UQ751COSF", "43")
const tv5 = new Tv("LG", "43LM631C0SB", "43")

// document.write(`
//     <div class="card">
//         <img class="foto" src="img/${cel1.foto}"/>
//         <div class="info">
//             <h3 class="modelo">${cel1.modelo}</h3>
//             <p class="marca">${cel1.marca}</p>

//             <span class="outros">${cel1.processador}</span>
//             <span class="separador"> | </span>
//             <span class="outros">${cel1.armazenamento}</span>
//             <span class="separador"> | </span>
//             <span class="outros">${cel1.ram}</span>
//             <span class="separador"> | </span>
//             <span class="outros">${cel1.qtdDeCameras}</span>
//         </div>
//     </div>
// `)

// const tvs = [tv1, tv2, tv3, tv4, tv5]

// for (let i = 0; i < tvs.length; i++) {
//     document.write(`
//         <div class="card">
//         <img class="foto" src="img/${tvs[i].foto}">
//             <div class="info">
//                 <p class="marca">${tvs[i].marca}</p>
//                 <p class="modelo">${tvs[i].modelo}</p>
//                 <p class="outros">${tvs[i].tamanho}</p>
//             </div>
//         </div>
//     `)
// }
// Criando duas listas de favoritos


//criando 2 listas de favoritos
let meusProdutosTop = new Favoritos();
let produtosTopDaDarline = new Favoritos()

//adicionando produtos À segunda lista de favoritos
meusProdutosTop.adicionarProduto(cel1);
meusProdutosTop.adicionarProduto(tv1);
meusProdutosTop.adicionarProduto(tv2);
meusProdutosTop.adicionarProduto(cel3);
meusProdutosTop.adicionarProduto(cel4);

//adicionando produtos À segunda lista de favoritos
produtosTopDaDarline.adicionarProduto(cel1)
produtosTopDaDarline.adicionarProduto(cel5) 

//exibindo os produtos da primeira lista
// meusProdutosTop.exibirNoHtml();

//exibindo os produtos da segunda lista
// produtosTopDaDarline.exibirNoHtml();
