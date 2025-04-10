export class Funcionario {
    #nome;
    #matricula;
    #anoAdmissao;
    #endereco;
    #salario = 0;
  
    constructor(nome, matricula, anoAdmissao, endereco) {
      this.#nome = nome;
      this.#matricula = matricula;
      this.#anoAdmissao = anoAdmissao;
      this.#endereco = endereco;
    }
  
    get nome() {
      return this.#nome;
    }
  
    get matricula() {
      return this.#matricula;
    }
  
    get salario() {
      return this.#salario;
    }
  
    receberSalario(valor) {
      if (valor > 0) {
        this.#salario += valor;
        return `Salário de R$${valor.toFixed(2)} adicionado. Total: R$${this.#salario.toFixed(2)}`;
      }
      return `Valor inválido para salário.`;
    }
  
    verificarTempoEmpresa(anoAtual) {
      const tempo = anoAtual - this.#anoAdmissao;
      return `Tempo de empresa: ${tempo} anos.`;
    }
  
    baterPonto() {
      const hora = new Date().toLocaleTimeString();
      return `${this.#nome} bateu o ponto às ${hora}`;
    }
  
    getDados() {
      return {
        nome: this.#nome,
        matricula: this.#matricula,
        anoAdmissao: this.#anoAdmissao,
        endereco: this.#endereco,
        salario: this.#salario.toFixed(2)
      };
    }
  }
  