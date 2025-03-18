let estacionamento = [
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"],
    ["Vazio", "Vazio", "Vazio"]
]

function estacionarCarro(linha, coluna, placa) {
    if(estacionamento[linha][coluna] === "Vazio") {
        estacionamento[linha][coluna] = placa;
    } else {
        console.log(`ESSA VAGA ESTÁ OCUPADA! VEÍCULO: ${estacionamento[linha][coluna]}`);
    }
}

function removerCarro(linha, coluna) {
    // remove um carro se a vaga estiver ocupada
    if(estacionamento[linha][coluna] !== "Vazio") {
        console.log(`Removendo o veículo: ${estacionamento[linha][coluna]}`)        
        estacionamento[linha][coluna] = "Vazio";
    } else {
        console.log("VAGA JÁ SE ENCONTRA VAZIA!");
    }
}

function exibirEstacionamento() {
    console.log(estacionamento);
}

exibirEstacionamento();
estacionarCarro(1, 1, "ZBX9887");
estacionarCarro(2, 1, "ABT0801");
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
removerCarro(0,0);
removerCarro(1,1);
exibirEstacionamento();
estacionarCarro(1, 1, "TTT0055");
exibirEstacionamento();