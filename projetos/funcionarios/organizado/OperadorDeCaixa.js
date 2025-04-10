import { Funcionario } from './Funcionario.js';

export class OperadorDeCaixa extends Funcionario {

    receberSalario(valor) {
        // TODO: Modificação futura
       return super.receberSalario(valor);
    }

    fechamentoCaixa(valorTotal) {
        return `${this.getNome()} fechou o caixa com o valor de  R$${valorTotal}.`;
    }
}
