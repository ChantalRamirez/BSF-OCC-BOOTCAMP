class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    widrawal(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;     
        } else {
            console.log('Insufficient balance!');
        }
    }

}