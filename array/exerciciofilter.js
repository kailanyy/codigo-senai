// Criar um array com 30 produtos. Cada produto possui os campos: nome, preço e validade (true/false).
// Mostrar para os usuários:
// a) Filtro 1: listar apenas os produtos que estão dentro do prazo de validade;
// b) Filtro 2: listar apenas os produtos com valor entre R$50,00 a R$100,00.

let produtos = [
    {nome:"Goiaba", preco:2.50, validade: true},
    {nome: "Banana", preco: 1.50, validade: false},
    {nome:"Morango", preco:4.50, validade: true},
    {nome:"Uva", preco:7, validade: false},
    {nome:"Laranja", preco:90, validade: true},
    {nome:"Pitaya", preco:9.50, validade: true},
    {nome:"Kiwi", preco:50, validade: true},
    {nome:"Manga", preco:59, validade: true},
    {nome:"Abacate", preco:100, validade: false},
    {nome:"Mamão", preco:5, validade: true},
    {nome:"Limão", preco:9, validade: false},
    {nome:"Tangerina", preco:6, validade: false},
    {nome:"Manga", preco:5, validade: true},
    {nome:"Manga", preco:5, validade: true},
    {nome:"Manga", preco:5, validade: true},
    {nome:"Manga", preco:5, validade: true},
]

console.log("Produtos dentro da validade: ", produtos.filter((p) => {return p. validade = true}));
console.log("Produtos com valor entre $50,00 a $100,00: ", produtos.filter((v) => {return v. preco >=50}));