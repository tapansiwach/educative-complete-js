const account = {
  name: 'Alex',
  balance: 0,
  credit(amount) {
    this.balance += amount;
  },
  describe() {
    return `${this.name}'s account has a balance of ${this.balance}`;
  }
}

account.credit(100);
account.credit(-50);
console.log(`${account.name}'s account with a balance of ${account.balance}`);