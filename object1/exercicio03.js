// • O objeto funcionário possui os atributos (propriedades) nome
// e sobrenome.
// • Crie 2 funcionários;
// • Delete a propriedade sobrenome de um dos objetos;
// • Mostre via console ambos os funcionários.

let employee1 = {firstname: "aaa", lastname: "bbb"}
let employee2 = {firstname: 'ccc', lastname: 'ddd'}

console.log("employee1",employee1.lastname);

delete employee1.lastname

console.log(employee1, employee2);