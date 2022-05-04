class Conta {
    constructor(numeroAgencia, numeroConta, saldo){
        this.numeroAgencia = numeroAgencia
        this.numeroConta = numeroConta
        this.saldo = saldo
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor
        }
    }

    sacar(valor){
        if (valor > 0 && valor <= this.saldo){
            this.saldo -= this.saldo - valor
            console.log("Saque realizado!");
            return valor
        } else {
            console.log("Não é possível realizar o saque");
        }
    }
}

let conta = new Conta('12345-6', '3456-7', 100)
conta.depositar(1000)
conta.sacar(510)
console.log(conta);