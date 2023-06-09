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
    calcularSubtotal() {
        // let subtotal = this.itens.calcularTotalItem().reduce((index, acumulador) => index + acumulador, 0);
        let subtotal = 0;
        for (const item of this.itens) {
            subtotal += item.calcularTotalItem();
        }
        return subtotal;
    }
    calcularTotal() {
        let total = this.calcularSubtotal() + this.frete;
        return total;
    }
}

class ItemPedido {
    constructor(product, qtnd) {
        this.product = product;
        this.qtnd = qtnd;
    }
    calcularTotalItem() {
        let totalItem = this.product.unit_price * this.qtnd
        return totalItem
    }
}

let user1 = new User("Vit", 888888888, 0o0000000000, "Rua GWDASDASD");
let shop1 = new Shop("Magagu", 0o123456711123);
let product1 = new Product("Relógio", 500);
let product2 = new Product("Sapato", 85);
let pedido1 = new Pedido("30/02/2007", 108, user1, shop1, 55);
let itemPedido1 = new ItemPedido(product1, 1)
let itemPedido2 = new ItemPedido(product2, 2)
pedido1.addItem(itemPedido1)
pedido1.addItem(itemPedido2)
console.log(`Subtotal ${pedido1.calcularSubtotal()}`)
console.log(`Total ${pedido1.calcularTotal()}`)
console.log(`Total item1 ${itemPedido1.calcularTotalItem()}`)
console.log(`Total item2 ${itemPedido2.calcularTotalItem()}`)

