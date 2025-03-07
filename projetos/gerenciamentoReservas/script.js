let reservas = [];

// Adicionar Reserva
function adicionarReserva() {
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    if(nome === "" || data === "") {
        alert("Preencha todos os campos");
        return;
    }

    let novaReserva = {nome, data};

    reservas.push(novaReserva);
    
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    
    atualizarListaReservas();
}

// Remover Reserva
function removerReserva(index) {
   reservas.splice(index, 1);
   atualizarListaReservas();
}

function atualizarListaReservas() {
    let lista = document.getElementById("listareservas");
    lista.innerHTML = "";

    reservas.forEach((reserva, n) => {
        let li = document.createElement("li");
        li.innerHTML = `${reserva.nome}, ${reserva.data} <button class="remover" onclick="removerReserva(${n})">X</button>`;
        lista.appendChild(li);
    });

    // for(let i = 0; i < reservas.length; i++) {
    //     let li = document.createElement("li");
    //     li.innerHTML = `${reservas[i].nome}, ${reservas[i].data} <button onclick="removerReserva(${i})">X</button>`;
    //     lista.appendChild(li);
    // }
}