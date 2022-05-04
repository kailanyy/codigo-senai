// 8) Fazer um programa no qual o usuário deve digitar as três cores primárias (amarelo, vermelho, azul) e armazenar
// em um vetor. Solicitar três vezes “Digite uma cor primária: ”. Em seguida deve digitar as três cores secundárias
// (laranja, verde, violeta) e armazenar em outro vetor. Solicitar três vezes “Digite uma cor secundária: ”. Um novo
// vetor deve ser criado com cores primárias + secundárias (amarelo, vermelho, azul, laranja, verde, violeta). No início
// dessa lista deve-se adicionar preto e no final branco. Perguntar “Adicionar no início da lista: ” e “Adicionar ao
// final da lista: ”. Mostrar na tela a sequência completa, incluindo preto e branco.

let coresPrimarias = []
let coresSecundarias = []

for (i = 0; i <= 2; i++) {
    coresPrimarias.push(prompt(`Digite uma cor primária`) )
}

for (y = 0; y <= 2; y++) {
    coresSecundarias.push(prompt(`Digite uma cor secundária`) )
}

let coresCombinadas = [...coresPrimarias, ...coresSecundarias]

coresCombinadas.unshift(prompt("Adicionar no início da lista:"))

coresCombinadas.push(prompt("Adicionar no final da lista:"))

alert(coresCombinadas);