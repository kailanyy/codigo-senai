// Crie um algoritmo para cadastrar em um array os seguintes dados dos produtos: nome, quantidade e valor unitário.
// O algoritmo deve calcular o valor total dos produtos e preço médio

produtos = [
    {nome: 'Hamburguer Simples', quantidade: 2, preco: 25.5},
    {nome: 'Hamburguer Duplo', quantidade: 2, preco: 35.5},
    {nome: 'Hamburguer Bacon', quantidade: 2, preco: 29.5},
    {nome: 'Hamburguer Bacon Duplo', quantidade: 2, preco: 40.5},
]

// console.log("Produtos Vendidos:", produtos);
for(i = 0; i < produtos.length; i++){
    produtos[i].total = produtos[i].preco * produtos[i].quantidade
}

produtos.map(p => p.total = p.preco * p.quantidade)
console.log(produtos);