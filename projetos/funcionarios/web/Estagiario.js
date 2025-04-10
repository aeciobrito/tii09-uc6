import { Funcionario } from './Funcionario.js';

export class Estagiario extends Funcionario {
  constructor(nome, matricula, anoAdmissao, endereco) {
    super(nome, matricula, anoAdmissao, endereco);
  }

  solicitarAjuda() {
    return `Estagiário ${this.nome} solicitou ajuda ao supervisor.`;
  }

  baterPonto() {
    return `Estagiário ${this.nome} marcou presença.`;
  }
}
