// Declaranado uma Matriz
let vagas = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Acessando/Exibindo valores de uma matriz
console.log(vagas[0][3]);
console.log(vagas[2][1]);

// Declarando uma Matriz
let predio = [
    ["1S", "2S", "3S"],
    ["00", "01", "Atendimento"],
    ["A1", "A2", "A3"]
]

// Acessando valres de uma matriz
console.log(predio[1][2]); // Atendimento
console.log(predio[2][0]); // A1
console.log(predio); // Exibe Matriz completa

// Atualizando valores em uma matriz
predio[1][2] = "RH";

console.log(predio); // Exibe Matriz completa

// Adicionando uma nova linha na Matriz
predio.push(["B1", "B2", "B3"]);