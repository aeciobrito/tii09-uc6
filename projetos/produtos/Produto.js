export class Produto {
    #id;
    #nome;
    #preco;
    #peso;
    #validade;

    constructor(nome, preco, peso, validade) {        
        this.#id = Produto.getProximoId();
        this.#nome = nome;
        this.#preco = preco;
        this.#peso = peso;
        this.#validade = validade;
    }
    
    get id() { return this.#id; }
    get nome() { return this.#nome; }
    get preco() { return this.#preco; }
    get peso() { return this.#peso; }
    get validade() { return this.#validade; }

    toString() {
        let mensagem = `Produto ${this.#nome} ID: ${this.#id}`;
        if (this.estaProximoDaValidade()) {
            mensagem += " [ATENÇÃO: Próximo do Vencimento!]"
        }
        return mensagem;
    }

    estaProximoDaValidade() {
        const hoje = new Date();
        const diff = (this.#validade - hoje) / (1000 * 60 * 60 * 24);
        return diff < 10;
    }

    static getProximoId() {
        let maxId = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);

            if (!isNaN(parseInt(chave))) {
                maxId = Math.max(maxId, parseInt(chave));
            }
        }
        return maxId + 1;
    }

    atualizarDados(novoNome, novoPreco, novoPeso, novaValidade) {
        if(!novoNome || isNaN(novoPreco) || isNaN(novoPeso) || !novaValidade) {
            throw new Error("Dados inválidos para atualização");
        }

        this.#nome = novoNome;
        this.#preco = novoPreco;
        this.#peso = novoPeso;
        this.#validade = novaValidade;
    }

    static fromJSON(json) {
        const produto = new Produto(json.nome, json.preco, json.peso, json.validade);
        produto.#id = json.id;
        return produto;
    }
}