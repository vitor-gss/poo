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
    constructor(nameItem, unit_price) {
        this.nameItem = nameItem;
        this.unit_price = unit_price;
    }
}

class Pedido {
    constructor(date, number, user, shop, frete) {
        this.date = date;
        this.number = number;
        this.user = user;
        this.shop = shop;
        this.frete = frete;
        this.itens = [];
    }
    addItem(item) {
        this.itens.push(item);
    }
    calcularSubtotal(){
        
    }
}

class itemPedido {
    constructor(product, qtnd) {
        this.product = product;
        this.qtnd = qtnd;
    }
    calcularTotalItem(){
        let totalItem = this.product.unit_price * this.qtnd
        return totalItem
    }
}


