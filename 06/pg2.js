let cadeiras = [
    ['B2', 'B4', 'B6', 'B8'],
    ['D2', 'D4', 'D6', 'D8'],
    ['F2', 'F4', 'F6', 'F8'],
    ['F2', 'F4', 'F6', 'F8']
];

console.log(cadeiras.length);
for(let i = 0; i < cadeiras.length; i++) {
    for(let j = 0; j < cadeiras[i].length; j++) {
        console.log(`Posição [${i}][${j}]: ${cadeiras[i][j]}`);
    }
    console.log("\n");
}

