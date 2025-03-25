let pessoas = [
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" },
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" }
];

function buscaBinaria(lista, nome) {
    let inicio = 0
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        let telefoneMeio = lista[meio].telefone;

        if (telefoneMeio === nome) {
            return lista[meio];
        } else if (telefoneMeio < nome) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
    
    return -1;
}

// Ordem Original
// console.log(pessoas);

pessoas.sort((a, b) => a.telefone.localeCompare(b.telefone)); // ordenção

// Ordenado por Telefone
// console.log(pessoas)

console.log(buscaBinaria(pessoas, "977777777"));