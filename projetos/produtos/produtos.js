import { BancoDeDados } from "./BancoDeDados.js";

const ul = document.getElementById("listaProdutos");
const produtos = BancoDeDados.buscarTodos();

if(produtos.length === 0) {
    ul.innerHTML = '<li>Nenhum produto cadastrado!</li>'
} else {
    produtos.forEach(p => {
        const li = document.createElement("li"); 
        
        li.textContent = p.toString();

        ul.appendChild(li);
    });
}
