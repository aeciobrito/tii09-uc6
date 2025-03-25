export function bubbleSort(array) {
    // conta do fim ao começo
    for(let limite = array.length -1; limite >= 0; limite--) {
        let completo = true;
        for(let i = 0; i < limite; i++) {
            if(array[i].nome > array[i + 1].nome) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                completo = false;
            }
        }
        if(completo) {
            break;
        }
    }
    return array;
}

export function buscaBinaria(lista, nome) {
    let inicio = 0
    let fim = lista.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        let telefoneMeio = lista[meio].nome;

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

let pessoas = [
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" },
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" }
];

bubbleSort(pessoas);
buscaBinaria(pessoas, "Lucas");