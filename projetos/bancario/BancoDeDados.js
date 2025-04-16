import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class BancoDeDados {
    // Clientes
    static salvarCliente(cliente) {
        localStorage.setItem(cliente.id, JSON.stringify({
            id: cliente.id,
            nome: cliente.nome,
            ativo: cliente.ativo
        }));
    }

    static buscarTodosClientes() {
        return this.buscarTodosPorPrefixo('cliente-', Cliente.fromJSONorObject);
    }

    static buscarClientePorId(id) {
        const dados = JSON.parse(localStorage.getItem(id));
        return dados ? Cliente.fromJSONorObject(dados) : null;
    }
    
    static buscarContaPorId(id) {
        const dados = JSON.parse(localStorage.getItem(id));
        if (!dados) return null;   
        
        return Conta.fromJSONorObject(dados);
    }

    // Contas
    static salvarConta(conta) {
        localStorage.setItem(conta.id, JSON.stringify({
            id: conta.id,
            clienteId: conta.cliente.id, // Armazena apenas a referência
            dataCriacao: conta.dataCriacao.toISOString(),
            saldo: conta.saldo,
            ativo: conta.ativo
        }));
    }

    static buscarTodasContas() {
        return this.buscarTodosPorPrefixo('conta-', dados => {
            return Conta.fromJSONorObject(dados);
        });
    }

    // Método genérico para busca por prefixo
    static buscarTodosPorPrefixo(prefixo, builder) {
        const itens = [];
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (chave.startsWith(prefixo)) {
                const dados = JSON.parse(localStorage.getItem(chave));
                itens.push(builder(dados));
            }
        }
        return itens.sort((a, b) => a.id.localeCompare(b.id));
    }
}