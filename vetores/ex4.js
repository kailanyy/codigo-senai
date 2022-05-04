// 4) Escreva um programa que leia dois vetores com 3 elementos cada e gere um terceiro vetor de 6 elementos, 
// cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. 
// Ao final o programa deverá mostrar os dois vetores originais e o terceiro vetor com os valores intercalados.

let vetor1 = [1,2,3]
let vetor2 = [4,5,6]
let vetor3 = []

for(i = 0; i < 3; i++) {
  vetor3.push(vetor1[i])
  vetor3.push(vetor2[i])
}

console.log("Vetor 1:",vetor1);
console.log("Vetor 2:",vetor2);
console.log("Vetor 3:",vetor3);