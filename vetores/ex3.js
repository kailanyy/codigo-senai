// Cria um programa onde o usuário digite 5 números inteiros. Ao terminar de digitar os números, 
// mostrar uma lista somente com números ímpares digitados e a soma desses números.

let numeros = []
let nImpar = []
let soma = 0

while(numeros.length < 5){
  let nInserido = Number(prompt("Digite um número"))

  if(nInserido > 0){
    numeros.push(nInserido)
    alert(`${numeros.length}º número inserido!`)
  } else {
    alert("Insira um número inteiro!")
  }
}

for (i = 0; i <= numeros.length-1; i++){
  if(numeros[i] % 2 != 0){
    nImpar.push(numeros[i])
  }
}

for (y = 0; y <= nImpar.length-1; y++){
  soma += nImpar[y]
}

alert(`Números ímpares:${nImpar}`);
alert(`Soma dos números impares:${soma}`);
