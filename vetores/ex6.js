// 6) Palíndromo é aquele elemento que, se lido de trás para frente e de frete para trás, é o mesmo.
// Exemplos: 616, 2112 2442, 87655678. Criar um vetor onde deve-se digitar 6 números e verificar se o vetor é palíndromo.
// (DESAFIO: fazer com 7 números).

let vetor1 = []

for (i = 1; i <= 7; i++) {
    vetor1.push( prompt(`Digite o ${i}° número`) )
}

let vetor2 = [...vetor1].reverse()

if(String(vetor1) === String(vetor2)) {
    alert("O número digitado é um palíndromo")
}else{
    alert("O número digitado não é um palíndromo")
}