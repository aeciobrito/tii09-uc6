class ContaBancaria {
    numero = "0";
    #saldo = 0; // Encapsulamento
    #senha = "";

    constructor(numero, senha) {
        this.numero = numero;
        this.#saldo = 50;
        this.#senha = senha;
    }

    getSaldo(senha) {
        if(senha === this.#senha) {
            return this.#saldo;
        } else {
            console.log("SENHA INVÁLIDA!");
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.#saldo += valor;
        } else {
            console.log("VALOR INVÁLIDO!");
        }
    }

    sacar(valor) {
        if(valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        } else { 
            console.log("VALOR INVÁLIDO!");
            return false;
        }
    }

    transferir(contaDestino, valor) {
        if(this.sacar(valor)) {
            contaDestino.depositar(valor);
        }
    }
}

let novaContaA = new ContaBancaria("0001", "123A");
let novaContaB = new ContaBancaria("0002", "321A");

novaContaA.transferir(novaContaB, 500);

console.log(novaContaA.getSaldo("123A"));
console.log(novaContaB.getSaldo("321A"));
