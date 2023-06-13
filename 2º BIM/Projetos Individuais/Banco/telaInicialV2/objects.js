let user = new User("Vitão", 2023, "03895124444");
let account = new Account(user.cpf, "Corrente", 0.21);
console.log(user)
console.log(account)
let bank = new Bank(account, user);
console.log(bank)