export class Funcionario {
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