import { Produto } from "./Produto.js"

export class BancoDeDados {
    // CREATE
    static salvar(produto) {
        localStorage.setItem(produto.id, JSON.stringify({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            peso: produto.peso,
            validade: produto.validade
        }));
    }

    // READ
    buscarTodos() {

    }

    buscarPorId(id) {

    }

    // UPDATE
    atualizar(produtoAtualizado) {

    }

    //DELETE
    excluir(id) {

    }
}