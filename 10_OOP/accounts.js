class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  describe() {
    return "Name: " + this.name + "\nBalance: " + this.balance;
  }

  credit(amount) {
    this.balance += amount;
  }
}


// tests
const account = new Account("educative");
account.credit(1000);
console.log(account.describe());
account.credit(-1000);
console.log(account.describe());