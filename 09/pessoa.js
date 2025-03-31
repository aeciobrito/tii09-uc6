// Propriedades: altura, peso, anoNascimento, nome, vivo
// Metodos: andar, pular, mostrarIdade

class Pessoa {
    altura;
    peso;
    anoNascimento;
    nome;
    vivo;

    constructor(altura, peso, anoNascimento, nome) {
        this.altura = altura;
        this.peso = peso;
        this.anoNascimento = anoNascimento;
        this.nome = nome;
        this.vivo = true;
    }

    andar() {
        if(this.vivo) {
            console.log(`${this.nome} andou!`);
        } else {
            console.log("Não pode mais andar.");
        }
    }

    mostrarIdade(ano) {
        console.log(`A idade de ${this.nome} é: ${ano - this.anoNascimento}`)
    }

    morrer() {
        this.vivo = false;
    }
}

let pessoa = new Pessoa(180, 80, 1990, "Aecio");

console.log(pessoa);
pessoa.andar();
pessoa.mostrarIdade(2012);
pessoa.morrer()
pessoa.andar();