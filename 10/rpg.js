class Personagem {
    _nome;
    _forca;
    _pontosDeVida;
    _vivo; // valor booleano

    constructor(nome, forca, vida) {
        this._nome = nome;
        this._forca = forca;
        this._pontosDeVida = vida;
        this._vivo = true;
    }

    atacar(inimigo) {
        console.log(`${this._nome} atacou ${inimigo._nome}!`)
        this.mostrarDados();
        inimigo.tomarDano(this._forca);
    }

    tomarDano(danoRecebido) {
        if (danoRecebido > 0) {
            this._pontosDeVida -= danoRecebido;
            console.log(`${this._nome} sofreu um ataque de ${danoRecebido}!`);
            this.mostrarDados();

            if (this._pontosDeVida <= 0) {
                this.morrer();
            }
        } else {
            console.log("Valor do dano é inválido!");
        }
    }

    recuperarVida(valorARecuperar) {
        if (valorARecuperar > 0 && this._vivo) {
            this._pontosDeVida += valorARecuperar;
            console.log(`${this._nome} recuperou  ${valorARecuperar} de vida!`);
            this.mostrarDados()
        } else {
            console.log("Valor de vida é inválido ou está morto!");
        }
    }

    morrer() {
        this._vivo = false;
        console.log(`${this._nome} morreu!`)
    }

    mostrarDados() {
        console.log(`O ${this._nome} está com ${this._pontosDeVida} de vida e tem ${this._forca} de força`);
    }
}

class Guerreiro extends Personagem {
    // Ao tomar dano, é reduzido em 5 por conta do escudo;
    tomarDano(danoRecebido) {
        danoRecebido -= 5; // pontos do escudo
        super.tomarDano(danoRecebido);
        console.log("Mas, esse dano foi reduzido em 5");
    }
}

class Mago extends Personagem {
    atacar(inimigo) {
        this._pontosDeVida -= 5;

        if (this._pontosDeVida <= 0) {
            // this.morrer();
            console.log("Vida insuficiente para conjurar um ataque!");
            this._pontosDeVida += 5;
            return;
        }

        super.atacar(inimigo);
    }
}

class Arquiero extends Personagem {
    _totalDeFlechas;

    constructor(nome, forca, vida, flechas) {
        super(nome, forca, vida);
        this._totalDeFlechas = flechas;
    }

    atacar(inimigo) {
        if (this._totalDeFlechas > 0) {
            this._totalDeFlechas--;
            super.atacar(inimigo);
            console.log(`${this._nome} gastou uma flecha e agora tem ${this._totalDeFlechas}!`)
        } else {
            console.log(`${this._nome} não pode atacar, ${this._totalDeFlechas} flechas!`);
        }
    }

    // Ao atacar, gasta uma flecha, se o total for zero não pode atacar
}

let personagem1 = new Mago("Gendalf", 200, 250);
personagem1.mostrarDados()

let personagem2 = new Arquiero("Legolas", 30, 400, 4)
personagem2.mostrarDados();

for(let i = 0; i < 10; i++) {
    personagem2.atacar(personagem1);
}