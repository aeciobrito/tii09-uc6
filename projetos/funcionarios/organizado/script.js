import { Estagiario } from './Estagiario.js';
import { OperadorDeCaixa } from './OperadorDeCaixa.js';
import { Gerente } from './Gerente.js';

const gerente = new Gerente("Ana", "G001", 2015, "Rua do Salto, nº 100");
console.log(gerente.baterPonto());
console.log(gerente.tempoDeEmpresa(2022));
console.log(gerente.receberSalario(4000));
console.log(gerente.autorizarDespesa(4000));

const caixa = new OperadorDeCaixa("Celso", "C005", 2023, "Rua Velha, nº 12");
console.log(caixa.baterPonto());
console.log(caixa.tempoDeEmpresa(2025));
console.log(caixa.receberSalario(2000));
console.log(caixa.fechamentoCaixa(20000));

const estagiario = new Estagiario("Junior", "E0558", 2024, "Avenida da Encosta");
console.log(estagiario.baterPonto());
console.log(estagiario.tempoDeEmpresa(2025));
console.log(estagiario.receberSalario(2000));
console.log(estagiario.registrarAtividade("Preparou o cafezinho. Delícia!"));
console.log(estagiario.registrarAtividade("Limpou os tonners da impressora."));
