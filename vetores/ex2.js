// Desenvolva um programa que o usuário digite 10 números positivos e inteiros,
// ao final mostre o valor que resultado do somatório da primeira metade dos números menos o somatório da segunda metade.

let numeros = []

while(numeros.length < 10){

  let numeroInserido = Number(prompt("Digite um número"))
  
  if(numeroInserido > 0){
    numeros.push(numeroInserido)
    alert(`${numeros.length}º número adicionado!`)
  } else {
    alert("Digite um número positivo e inteiro!")
  }
}

let metade1 = 0
let metade2 = 0

for(i=0; i < 5; i++){
  metade1 += numeros[i]
  console.log(`numeros[i],${numeros[i]}`);
}

alert(`Soma Metade 1:${metade1}`);

for(y=5; y < 10; y++){
  metade2 += numeros[y]
}

alert(`Soma Metade 2:${metade2}`);

let subtracao = metade1 - metade2
alert(`Subtração das metades:${subtracao}`);