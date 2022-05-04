// 5) Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. 
// Deve ser perguntado em sequência “Qual fruta adicionar?”. Quando for adicionado a cereja, 
// finalizar com a frase “Sua salada de frutas está pronta!”. Mostrar a lista das frutas. 
// (DESAFIO: Mostrar também a quantidade de cada fruta)

let saladaFrutas = []

for(i = 0; saladaFrutas[i-1] !="cereja"; i++){
    
  let resposta = prompt("Qual fruta adicionar?")
  
  console.log("Fruta adicionada:", resposta);
  saladaFrutas.push(resposta)
  
} 

alert("Sua salada de frutas está pronta!")

for(y = 0; y < saladaFrutas.length; y++){
  alert(saladaFrutas[y])
}