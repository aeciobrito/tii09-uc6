class Carro {
    // Propriedades diretamente no construtor FUNCIONA
    constructor(modelo, marca, cor) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
    }
}

let car = new Carro("Marea", "Fiat", "Prata");
console.log(car);

