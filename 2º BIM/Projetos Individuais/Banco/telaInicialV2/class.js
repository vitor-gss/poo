class User {
    constructor(name, password, cpf) { // Informações do usuário
        this.name = name;
        this.password = password;
        this.cpf = cpf;
    }
}
class Account { // Informações da conta
    constructor(cpf, type, saldo) { // type = Corrente, Poupança...
        this.cpf = cpf;
        this.type = type;
        this.saldo = saldo;
    }
}
class Bank {
    constructor(account, user) {
        this.account = account;
        this.cpf = user.cpf,
        this.name = user.name,
        this.password = user.password,
        this.type = account.type,
        this.saldo = account.saldo
        this.users = []
        this.account = []
    }
    adicionarUsuario(user){
        this.users.push(user)
    }
    adicionarConta(account){
        this.account.push(account)
    }
}

var user = new User("Vitão", 2023, "03895124444");
var account = new Account(user.cpf, "Corrente", 32);
var user2 = new User("Gabiel", 2022, "03888124443");
var account2 = new Account(user2.cpf, "Poupança", 986);
var bank = new Bank(account, user);
bank.adicionarConta(account)
bank.adicionarUsuario(user)
bank.adicionarConta(account2)
bank.adicionarUsuario(user2)

// Dúvida -> Como acessar cada usuário?