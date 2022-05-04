// 7) Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
// Caso exista, o programa deve mostrar todos os índices que ele se encontra.

let vetor = [1,3,1,4,5,2,7,5,3,4]
let resposta = parseInt(prompt("Qual número verificar?"))
let indicesEncontrados = []

for (i = 0; i < vetor.length; i++) {
    if(resposta === vetor[i]){
        indicesEncontrados.push(i)
    }
}

console.log(indicesEncontrados);
alert(`índices encontrados: ${(indicesEncontrados)}`)