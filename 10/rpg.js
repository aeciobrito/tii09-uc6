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

    atacar() {

    }

    tomarDano() {
        console.log("Tomou dano de X");
    }

    recuperarVida() {

    }

    morrer() {

    }
}

class Guerreiro extends Personagem {
    // Ao tomar dano, é reduzido em 5 por conta do escudo;
    tomarDano() {
        super.tomarDano();
        console.log("Mas, esse dano foi reduzido em Y");
    }
}

class Mago extends Personagem {
    // Ao atacar, reduz 5 da própria vida, para fazer um ataque
}

let personagem1 = new Mago("Connan", 200, 250);
personagem1.tomarDano();