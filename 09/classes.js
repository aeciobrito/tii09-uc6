//// Classe: são "moldes" para criar objetos com a mesma estrutura

class Carro {
    marca = "";
    modelo = "";
    ano = 0;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
}

// Criando objetos a partir da classe Carro (instância da classe)
let carro1 = new Carro();
carro1.marca = "Honda";
carro1.modelo = "Civic";
carro1.ano = 2024;

console.log(carro1.ano) // 2024 
carro1.ligar();

let carro2 = new Carro("Ford", "Mustang", 2022);
console.log(carro2.ano) // 2022 
carro2.ligar();