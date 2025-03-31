//// OBJETOS: CONTÉM MÉTODOS E ATRIBUTOS

// OBJETO LITERAL
let carroA = { marca: "Toyota", modelo: "Corolla" };

let carroB = { 
    marca: "Fiat", 
    modelo: "Uno",
    ano: 2009,
    ligar: function() {
        console.log(`O carro ${this.marca} ${this.modelo} está ligado`);
    }
};

let carros = [carroA, carroB]; // Array de diferentes carros

console.log(carroA.marca); // Toyota
console.log(carroB.modelo); // Uno
console.log(carroB.ligar()); // O carro Fiat Uno está ligado
// console.log(carroA.ligar()); // ERRO: carroA.ligar() não é uma função do objeto