// O objeto produto possui os atributos (propriedades) nome e
// preço.
// • Crie 2 produtos;
// • Extraia os valores dos produtos para duas variáveis e some
// o total;
// • Mostre via console o total de produtos.

let produto1 = {
    nome: "maracuja",
    preco: 1.00
}
let produto2 = {
    nome: "amora",
    preco: 2.00
}

console.log("produto1","R$",produto1);
console.log("produto2","R$",produto2);

console.log("soma do valor dos produtos:","R$",produto1.preco + produto2.preco);