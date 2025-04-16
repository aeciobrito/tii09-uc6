class Motorista {
    #nome

    constructor(nome) {
        this.#nome = nome;
    }

    get nome() { return this.#nome }
}

class Veiculo extends Motorista {
    #placa;
    #modelo;

    constructor(placa, modelo, nome) {
        super(nome)
        this.#placa = placa;
        this.#modelo = modelo;
    }

    get placa() { return this.#placa }
    get modelo() { return this.#modelo }
    get motorista() { return this.nome }
}

const v1 = new Veiculo("ABC-123", 'Vectra', "Edgar")

console.log(v1.placa, v1.modelo, v1.motorista);