class User {
    constructor(name, tel, cpf, adress) {
        this.name = name;
        this.tel = tel;
        this.cpf = cpf;
        this.adress = adress;
    }
}

class Shop {
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
    constructor(date, number, user, shop, subtotal, frete) {
        this.date = date;
        this.number = number;
        this.itens = [];
        this.total_price = this.itens.productPrice.reduce((index, acumulator) => index + acumulator, 0)
        this.frete = frete;
        this.subtotal = subtotal;
        this.shop = shop;
        this.user = user;
    }
    addItem(item) {
        this.itens.push({
            itemProduct: item.product,
            productPrice: item.product.price
        });
    }
}

class itemPedido {
    constructor(product, qtnd) {
        this.product = product;
        this.qtnd = qtnd;
        this.productTotalPrice = this.productPrice * qtnd
    }
}


