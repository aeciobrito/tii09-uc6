# Calculo de Frete

- Peça ao usuário a distância de entrega em km
- Calcule o valor do frete:
    - Até 50km => Frete Grátis
    - Entre 51km e 100km => R$ 10,00
    - Acima 101km => R$ 20,00

```
INICIO
    LER distancia
    SE distancia < 50
        ESCREVA "Frete Grátis"
    SENAO SE distancia < 100
        ESCREVA "R$ 10,00"
    SENAO
        ESCREVA "R$ 20"
FIM
```