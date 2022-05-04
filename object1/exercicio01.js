// • O objeto cliente possui os atributos (propriedades) nome,
// email e telefone.
// • Crie 3 clientes usando a forma literal;
// • Crie 3 clientes usando o método create;
// • Mostre ao usuário os 6 clientes impressos no console.

let cliente1 = {nome: 'cliente1', telefone: '48991160976', email: 'emailtopzao@gmail.com'}
let cliente2 = {nome: 'cliente2', telefone: '4899123243', email: 'emailemailemail@gmail.com'}
let cliente3 = {nome: 'cliente3', telefone: '4899123243', email: 'aaaaaaa@gmail.com'}

console.log(cliente1, cliente2, cliente3);

let clientes = []
for (i = 0; i < 6; i++){
    clientes.push({nome:"João"+i, email:"j@gmail.com"+i, telefone: "48991160976"})
}

console.log(clientes);