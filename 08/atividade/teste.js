import { deepStrictEqual, strictEqual } from "assert";
import { bubbleSort, buscaBinaria } from "./solucaoBubble.js";

// Criar dados para testes
// Dados de teste
let pessoas = [
    { nome: "Pedro", nascimento: "1993-12-05", tipoSanguineo: "A+", cpf: "67890123455", telefone: "944444444" },
    { nome: "Carlos", nascimento: "1985-07-23", tipoSanguineo: "A-", cpf: "23456789011", telefone: "988888888" },
    { nome: "Ana", nascimento: "1990-05-12", tipoSanguineo: "O+", cpf: "12345678900", telefone: "999999999" },
    { nome: "Maria", nascimento: "1995-08-19", tipoSanguineo: "O-", cpf: "56789012344", telefone: "955555555" },
    { nome: "Fernanda", nascimento: "1992-10-30", tipoSanguineo: "B+", cpf: "34567890122", telefone: "977777777" },
    { nome: "João", nascimento: "1988-03-15", tipoSanguineo: "AB-", cpf: "45678901233", telefone: "966666666" }
];

// Verificar se os testes são atendidos

// Teste 1: Ordenação
let pessoasOrdenadas = bubbleSort(pessoas);
let resultadoEsperado = ["Ana", "Carlos", "Fernanda", "João", "Maria", "Pedro"];

deepStrictEqual(pessoasOrdenadas.map(p => p.nome), resultadoEsperado, "❌ Erro na ordenação!");

// Teste 2: Busca Binária (Nome Existente)
let objetoResultado = buscaBinaria(pessoasOrdenadas, "Ana");
strictEqual(objetoResultado.nome, "Ana", "❌ Erro na busca binária (nome não existente)");

// Teste 3: Busca Binária (Nome não existente)
let resultadoNulo = buscaBinaria(pessoasOrdenadas, "Lucas");
strictEqual(resultadoNulo, -1, "❌ Erro na busca binária (retorno incorreto)");

console.log("✅ Todos os testes passaram!")