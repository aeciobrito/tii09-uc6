import { BancoDeDados } from "./BancoDeDados.js";
import { Produto } from "./Produto.js";

// buscar os dados da tela quando o usuário "salvar"
document.getElementById('formProduto').addEventListener('submit', (e) => {
    e.preventDefault();    

    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const peso = document.getElementById("peso").value;
    const validade = document.getElementById("validade").value;

    if(!nome || isNaN(preco) || isNaN(peso) || !validade) {
        alert("Preencha todos os campos corretamente");
        return;
    }

    if (id) {
        const produto = BancoDeDados.buscarPorId(id);
        produto.atualizarDados(nome, preco, peso, validade);
        BancoDeDados.atualizar(produto);
    } else {
        // criar um novo objeto do tipo "produto" com esses dados
        let produto = new Produto(nome, preco, peso, validade);

        // enviar esse objeto para o banco de dados    
        BancoDeDados.salvar(produto);
    }

    window.location.href = "produtos.html";
});

// Caso esteja editando
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('id')) {
    const produto = BancoDeDados.buscarPorId(urlParams.get('id'));
    console.log(produto);

    document.getElementById("id").value = produto.id;
    document.getElementById("nome").value = produto.nome;
    document.getElementById("preco").value = produto.preco;
    document.getElementById("peso").value = produto.peso;
    document.getElementById("validade").value = produto.validade;
}
