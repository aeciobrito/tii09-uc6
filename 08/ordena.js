let numeros = [40, 10, 30, 20, 50];

function bubbleSort(array) {    
    for (let limite = array.length - 1; limite >= 0; limite--) {
        let completo = true;
        for (let i = 0; i < limite; i++) {
            if (array[i] > array[i + 1]) { // troco eles de lugar            
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                completo = false;
            }
        }
        if(completo) {
            break;
        }
    }

    return array;
}

// SAÍDA
let saida1 = bubbleSort(numeros)
console.log(saida1);