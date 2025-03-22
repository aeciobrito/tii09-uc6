let alunos = [
    { nome: 'Carlos', altura: 1.75 },
    { nome: 'Gabriel', altura: 1.50 },
    { nome: 'Lucas', altura: 1.65 },
    { nome: 'Gustavo', altura: 1.67 },
    { nome: 'Clodoaldo', altura: 1.70 }
  ];

  console.log(alunos);

  function adenilsaSort(array) {
    let i = 0;

    while(i < array.length - 1) {
        // O aluno atual é o maior até o momento
        let ref = i;

        // Compara o aluno atual com o próximo
        if(array[i].altura > array[i + 1].altura) {
            // Se o próximo aluno for mais baixo, troca
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        } else {
            // Caso contrário, move o "referencia" para o próximo
            ref = i + 1;
        }

        // Incrementa a iteração e passa para o próximo aluno
        i = ref;
    }

    return array;
  }

  // TESTE
  console.log(adenilsaSort(alunos));