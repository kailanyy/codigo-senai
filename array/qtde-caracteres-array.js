// Crie um algoritmo para calcular a quantidade de caracteres de 10 nomes de um array e salve em outro array
let names = ["nome1","nome2","nome3" , "nome4", "nome5", "nome6", "nome7", "nome8", "nome9", "nome10"]
let savedNames = []

for(i = 0; i < names.length; i++){
    console.log("A quantidade de letras do nome é:",names[i].length);
    savedNames.push(names[i])
}


console.log("savedNames:",savedNames);