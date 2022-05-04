// 12) Faça um programa em que o usuário digite o nome de 5 produtos e seus preços
//  (“Digite o produto” / “Digite o seu preço”) e armazene esses nomes e preços em dois vetores separados.
//   O programa deve calcular e mostrar:

// a) A quantidade de produtos com preço inferior a R$50;
// b) O nome dos produtos com preço entre R$50 e R$100;
// c) A média dos preços dos produtos com preço superior a R$100.

let produtos = []
let precos = []
let produtos50100 = []
let produtosInferior50 = 0
let qtdeSuperior100 = 0
let totalSuperior100 = 0

for(i = 1; i <= 5; i++){
    let nomeProduto = prompt("Digite o produto")
    let precoProduto = Number(prompt("Digite o seu preço"))
    precos.push(precoProduto) 
    produtos.push(nomeProduto)

    if(precoProduto < 50){
        produtosInferior50++
    }
    if(precoProduto >= 50 && precoProduto <= 100){
        produtos50100.push(nomeProduto)
    }
    if(precoProduto > 100){
        qtdeSuperior100++
        totalSuperior100 += precoProduto
    }
} 

let mediaProdutos = totalSuperior100 / qtdeSuperior100

alert(`Quantidade de produtos com preço inferior a R$50: ${produtosInferior50}`)
alert(`O nome dos produtos com preço entre R$50 e R$100: ${produtos50100}`)
alert(`A média dos preços dos produtos com preço superior a R$100: ${mediaProdutos}`)