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
    constructor(account, user) {
        this.account = account;
        this.users = [{
            cpf: user.cpf,
            name: user.name,
            password: user.password,
            type: account.type,
            saldo: account.saldo
        }];
    }
}

