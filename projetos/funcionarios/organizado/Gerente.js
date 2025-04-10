import { Funcionario } from './Funcionario.js';

export class Gerente extends Funcionario {
    
    receberSalario(valor) {
        let total = valor + (valor * 0.2);
        console.log(super.receberSalario(valor));
        return `${this.getNome()} recebu com o bonus R$${total}`;
    }

    autorizarDespesa(valor) {
        if(valor > 1000) {
            return `Despa de R$ ${valor} autorizada por ${this.getNome()}`;
        } else {
            return `Despa de R$ ${valor} não precisa de autorização ou codigo invalido`;
        }
    }
}