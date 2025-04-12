import { Produto } from "./Produto.js"

export class BancoDeDados {
    // CREATE
    static salvar(produto) {
        localStorage.setItem(produto.getId(), JSON.stringify(produto));
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