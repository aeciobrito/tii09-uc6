import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaProdutos");
const produtos = BancoDeDados.buscarTodos();

if(produtos.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>'
} else {
    produtos.forEach(p => {
        // cria e informa o texto dos itens da lista
        const li = document.createElement("li");         
        li.textContent = p.toString();

        // cria um botão "editar"
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";

        // cria um botão "excluir"
        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => {
            BancoDeDados.excluir(p.id);
            window.location.reload();
        };


        li.append(" ", btnEditar," ", btnExcluir);
        ul.appendChild(li);
    });
}
