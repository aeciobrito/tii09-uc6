import { Utils } from "./Utils.js";
import { Cliente } from "./Cliente.js";
import { BancoDeDados } from "./BancoDeDados.js";

export class Conta {
    #id;
    #cliente;
    #dataCriacao
    #ativo;
    #saldo = 0;

    constructor(cliente, saldoInicial = 0) {
        if (!(cliente instanceof Cliente)) {
            throw new Error("Cliente inválido");
        }

        this.#id = Utils.getProximoId('conta-');
        this.#cliente = cliente;
        this.#dataCriacao = new Date();
        this.#saldo = saldoInicial;
        this.#ativo = true;
    }

    get id() { return this.#id; }
    get cliente() { return this.#cliente; }
    get dataCriacao() { return this.#dataCriacao; }
    get saldo() { return this.#saldo; }
    get ativo() { return this.#ativo; }

    toString() {
        let mensagem = `ID: ${this.#id} Cliente: ${this.#cliente.nome} Saldo: R$${this.#saldo.toFixed(2)} Data de Criação: ${this.#dataCriacao.toLocaleDateString()}`;
        if (!this.#ativo) {
            mensagem += " [INATIVO]";
        }
        return mensagem;
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino) {
        if (!(contaDestino instanceof Conta)) {
            throw new Error("Conta de destino inválida");
        }

        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    static fromJSONorObject(object) {
        const cliente = BancoDeDados.buscarClientePorId(object.clienteId);
        const conta = new Conta(cliente, object.saldo);
        conta.#id = object.id;
        conta.#dataCriacao = new Date(object.dataCriacao);
        conta.#ativo = object.ativo;

        return conta;
    }
}