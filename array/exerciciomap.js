// Crie um array com o valor de 20 produtos. Crie um map para fazer o cálculo do desconto de 15% no valor do produto.
let produtos = []

for (i = 0; i < 20; i++){
    produtos.push({nome:("Item " + (i+1)), preco: 2 * i, desconto: 0})
}

console.log(produtos);
produtos.map(p => p.desconto = p.preco * 0.85);
console.log("c/ desconto:",produtos);
