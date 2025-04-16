class Motorista {
    #nome

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() { return this.#nome }

    saudacao() {
        console.log(`Seu uber está chegando, dirigido por ${this.#nome}`);
    }
}

class Veiculo {
    #placa;
    #modelo;
    #motorista;

    constructor(placa, modelo, motorista) {
        this.#placa = placa;
        this.#modelo = modelo;
        this.#motorista = motorista;
    }

    get placa() { return this.#placa }
    get modelo() { return this.#modelo }
    get motorista() { return this.#motorista }
}

const m1 = new Motorista("Edgar");
const v1 = new Veiculo("ABC-123", 'Vectra', m1)

console.log(v1.placa, v1.modelo, v1.motorista.saudacao());