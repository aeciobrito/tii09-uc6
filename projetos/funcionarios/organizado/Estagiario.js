import { Funcionario } from './Funcionario.js';

export class Estagiario extends Funcionario {
    receberSalario(valor) {
        return `${this.getNome()} recebu bolsa estágio no valor de R$${valor}}`
    }

    registrarAtividade(descricao) {
        return  `${this.getNome()} realizou a atividade: ${descricao}`;
    }
}