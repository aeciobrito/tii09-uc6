import { BancoDeDados } from "./BancoDeDados.js";
import { Produto } from "./Produto.js";

// buscar os dados da tela quando o usuário "salvar"
document.getElementById('formProduto').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const peso = document.getElementById("peso").value;
    const validade = document.getElementById("validade").value;

    // criar um novo objeto do tipo "produto" com esses dados
    let produto = new Produto(nome, preco, peso, validade);

    // enviar esse objeto para o banco de dados    
    BancoDeDados.salvar(produto);
});




