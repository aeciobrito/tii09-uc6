class Funcionario {
    #nome;
    #matricula;
    #anoAdmissao;
    #endereco;

    constructor(nome, matricula, anoAdimissao, endereco) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#anoAdmissao = anoAdimissao;
        this.#endereco = endereco;
    }

    getNome() {
        return this.#nome;
    }

    getMatricula() {
        return this.#matricula;
    }

    receberSalario(valor) {
        return `${this.#nome} recebeu R$ ${valor}.`;
    }

    tempoDeEmpresa(anoAtual) {
        return anoAtual - this.#anoAdmissao;
    }

    baterPonto() {
        return `Ponto registrado para ${this.#nome}`;
    }
}

class Gerente extends Funcionario {
    
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

class OperadorDeCaixa extends Funcionario {

    receberSalario(valor) {
        // TODO: Modificação futura
       return super.receberSalario(valor);
    }

    fechamentoCaixa(valorTotal) {
        return `${this.getNome()} fechou o caixa com o valor de  R$${valorTotal}.`;
    }
}

class Estagiario extends Funcionario {
    receberSalario(valor) {
        return `${this.getNome()} recebu bolsa estágio no valor de R$${valor}}`
    }

    registrarAtividade(descricao) {
        return  `${this.getNome()} realizou a atividade: ${descricao}`;
    }
}

const gerente = new Gerente("Ana", "G001", 2015, "Rua do Salto, nº 100");
// console.log(gerente.baterPonto());
// console.log(gerente.tempoDeEmpresa(2022));
// console.log(gerente.receberSalario(4000));
// console.log(gerente.autorizarDespesa(4000));

const caixa = new OperadorDeCaixa("Celso", "C005", 2023, "Rua Velha, nº 12");
// console.log(caixa.baterPonto());
// console.log(caixa.tempoDeEmpresa(2025));
// console.log(caixa.receberSalario(2000));
// console.log(caixa.fechamentoCaixa(20000));

const estagiario = new Estagiario("Junior", "E0558", 2024, "Avenida da Encosta");
console.log(estagiario.baterPonto());
console.log(estagiario.tempoDeEmpresa(2025));
console.log(estagiario.receberSalario(2000));
console.log(estagiario.registrarAtividade("Preparou o cafezinho. Delícia!"));
console.log(estagiario.registrarAtividade("Limpou os tonners da impressora."));
