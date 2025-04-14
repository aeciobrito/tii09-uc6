function adicionarItem() {
    const nome = document.getElementById("itemNome").value;
    if (!nome) return;

    localStorage.setItem(Date.now(), nome);

    exibirItens();
}

function salvarItens(lista) {
    localStorage.setItem("itens", JSON.stringify(lista));
}

function exibirItens() {
    console.log(lista);
}

function buscarItem() {
    let dadosEmJson = localStorage.getItem("itens");
    let dadosConvertidos = JSON.parse(dadosEmJson);
    return dadosConvertidos;
}