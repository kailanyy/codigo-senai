// Crie uma lista de 10 produtos com nome e preço. Crie um novo array de preços usando “map”.
// Em seguida utilize o “reduce” para calcular o total dos produtos.

let produtos = []

for(i = 0; i < 10; i++){
    produtos.push({nome:("Cookies de Chocolate" + (i+1)), preco: 1 * i})
}

console.log("produtos:",produtos);
console.log("Total:" , produtos.map(p => p.preco).reduce((pa, pt) => pa + pt)); 