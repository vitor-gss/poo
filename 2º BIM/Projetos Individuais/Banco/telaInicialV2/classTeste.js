class User {
    constructor(name, password, cpf) { // Informações do usuário
        this.name = name;
        this.password = password;
        this.cpf = cpf;
        this.accounts = []
    }
 
    adicionarConta(acc) {
        this.accounts.push(acc);
    }
 
    showAllAccs() {
        for(let acc in this.accounts) {
            console.log(acc.type);
        }
    }
 
}
class Account { // Informações da conta
    constructor(type, saldo) { // type = Corrente, Poupança...
        this.type = type;
        this.saldo = saldo;
    }
 
    getDetails() {
        return [this.type, this.saldo];
    }
}
class Bank {
    constructor() {
        this.users = []
    }
    adicionarUsuario(user){
        this.users.push(user)
    }
    
}
 
let user = new User("Vitão", 2023, "03895124444");
user.adicionarConta(new Account(1, 200));
let user2 = new User("Gabiel", 2022, "03888124443");
let bank = new Bank();
bank.adicionarUsuario(user)
bank.adicionarUsuario(user2)
 
for(let u in bank.users) {
    console.log(u.name);
    console.log(u.cpf);
    u.showAllAccs()
}