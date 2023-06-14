class User {
    constructor(name, password, cpf) {
        this.name = name;
        this.password = password;
        this.cpf = cpf;
    }
}
class Account {
    constructor(cpf, type, saldo) { // type = Corrente, Poupança...
        this.cpf = cpf;
        this.type = type;
        this.saldo = saldo;
    }
}
class Bank {
    constructor(account, user, nameBank) {
        this.account = account;
        this.users = [{
            cpf: user.cpf,
            name: user.name,
            password: user.password,
            type: account.type,
            saldo: account.saldo,
            nameBank: nameBank
        }];
    }
}

var user = new User("Vitão", 2023, "03895124444");
var account = new Account(user.cpf, "Corrente", 32);
var bank = new Bank(account, user, "Itaí");
var user2 = new User("Gabiel", 2022, "03888124443");
var account2 = new Account(user2.cpf, "Poupança", 986);
var bank2 = new Bank(account2, user2, "CuBank");
const bancos = [bank, bank2]