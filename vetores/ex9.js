// 9) Faça um programa que solicite ao usuário digitar 5 números e mostre a soma da multiplicação dos números pelo maior número digitado. 
// Exemplo: pegar os 4 números digitados que não são o maior e multiplicá-los individualmente pelo maior. Mostrar a soma das multiplicações.

let listaNumeros = []
let maiorNumero = 0;
let soma = 0;

for (i = 1; i <= 5; i++) {
    let resposta = parseInt(prompt(`Digite o ${i}° número`))
    listaNumeros.push(resposta)
    if(resposta > maiorNumero){
        maiorNumero = resposta
    }
} 

for (y = 0; y < listaNumeros.length; y++) {
    if(maiorNumero != listaNumeros[y]){
        soma += maiorNumero * listaNumeros[y]
    }
}

alert(`O resultado da soma das multiplicações é de: ${soma}`)