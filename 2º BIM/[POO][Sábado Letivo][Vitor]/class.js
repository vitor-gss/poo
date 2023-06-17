class User {
    constructor(name, tel, cpf, adress) {
        this.name = name;
        this.tel = tel;
        this.cpf = cpf;
        this.adress = adress;
    }
}

class Loja {
    constructor(nameShop, cnpj) {
        this.nameShop = nameShop;
        this.cnpj = cnpj;
    }
}

class Product {
    constructor(item, unit_price) {
        this.item = item;
        this.unit_price = unit_price;
    }
}

class Pedido {
    constructor(date) {
        this.date = date;
        this.products = [];
        this.total_price = this.products.productPrice.reduce((index, acumulator) => index + acumulator, 0)
    }
    addProduct(product, qtnd) {
        this.products.push({
            product: product.item,
            qtnd: qtnd,
            productPrice: product.unit_price
        });
    }
}


