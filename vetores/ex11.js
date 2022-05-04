
// 11) Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, 
// no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. 
// Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, 
// doenças transmitidas por ambos, lista com todas doenças.

let numeroDoencas = prompt("Insira o número de doenças a cadastrar")
let listaBacterias = []
let listaVirus = []
let listaAmbos = []

for(i = 0; i < numeroDoencas; i++){
    let nomeDoenca = prompt("Qual é o nome da doença?")
    let transmissao = prompt("Ela é transmitida por vírus, bactéria ou por ambos?\n v - vírus\n b - bácteria\n a - ambos").toLowerCase()

    if(transmissao === "v"){
        listaVirus.push(nomeDoenca)
    } 
    
    if(transmissao === "b"){
        listaBacterias.push(nomeDoenca)
    }

    if(transmissao === "a"){
        listaAmbos.push(nomeDoenca)
    }
}

if(listaBacterias.length){
    alert(`Doenças transmitidas por bactérias: ${listaBacterias}`)
}
if(listaVirus.length){
    alert(`Doenças transmitidas por vírus: ${listaVirus}`)
}
if(listaAmbos.length){
alert(`Doenças transmitidas por ambos: ${listaAmbos}`)
}

alert(`Todas as doenças: ${[...listaBacterias,...listaVirus,...listaAmbos]}`)