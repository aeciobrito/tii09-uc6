/*
Crie a Classe "Personagem"
De a esse personagem um nome, e pontos de vida, ambos privados.
Crie o método construtor que informa o 
nome e os pontos de vida do personagem
Crie a função para "tomarDano" no personagem
Crie a função para "recuperarVida" no personagem
*/
class Personagem {
    #nome;
    #pontoDeVida;
    #forca
    #vivo;

    constructor(nome, pontosDeVida) {
        this.#nome = nome;
        this.#pontoDeVida = pontosDeVida;
        this.#forca = 30;
        this.#vivo = true;
    }

    // Ao zerar os pontos de vida, o personagem morre
    // Um personagem morto não pode atacar
    // Um personagem morto não pode recuperar a vida

    mostrarDados() {
        console.log(`O personagem ${this.#nome} tem ${this.#pontoDeVida} de vida.`);
    }

    tomarDano(valor) {
        if (valor >= 0) {
            this.#pontoDeVida -= valor;
            console.log(`${this.#nome} recebeu ${valor} de dano!`);
            if (this.#pontoDeVida <= 0) {
                this.morrer();
            }
        } else {
            console.log("Valor inválido!");
        }
    }

    recuperarVida(valor) {
        if (valor > 0 && this.#vivo) {
            this.#pontoDeVida += valor;
            console.log(`${this.#nome} recebeu ${valor} de vida!`);
        } else {
            console.log("Valor inválido!");
        }
    }

    atacar(inimigo) {
        if(this.#vivo) {
            console.log(`O ${this.#nome} atacou!`);
            inimigo.tomarDano(this.#forca);
        } else {
            console.log(this.#nome, "Morto, não pode mais atacar");
        }
    }

    morrer() {
        this.#vivo = false;
        console.log(`O ${this.#nome} morreu!`);
    }
}

let guerreiro = new Personagem("Leonidas", 120);
let arqueiro = new Personagem("Robin", 90);

guerreiro.mostrarDados();
arqueiro.mostrarDados();

guerreiro.atacar(arqueiro);
guerreiro.atacar(arqueiro);
guerreiro.atacar(arqueiro);
arqueiro.mostrarDados();
arqueiro.atacar(guerreiro);
