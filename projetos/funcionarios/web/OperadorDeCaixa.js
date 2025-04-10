import { Funcionario } from './Funcionario.js';

export class OperadorCaixa extends Funcionario {
  constructor(nome, matricula, anoAdmissao, endereco) {
    super(nome, matricula, anoAdmissao, endereco);
  }

  registrarVenda(valor) {
    return `Venda de R$${valor.toFixed(2)} registrada por ${this.nome}`;
  }
}
