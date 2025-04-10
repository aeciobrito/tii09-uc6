import { Funcionario } from './Funcionario.js';

export class Gerente extends Funcionario {
  constructor(nome, matricula, anoAdmissao, endereco) {
    super(nome, matricula, anoAdmissao, endereco);
  }

  aprovarRelatorio() {
    return `Gerente ${this.nome} aprovou o relatório gerencial.`;
  }

  receberSalario(valor) {
    const bonus = 0.2 * valor;
    const total = valor + bonus;
    return super.receberSalario(total);
  }
}
