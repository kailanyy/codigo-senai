let produtos = [{nome: 'amora', preco: 2},{nome: 'banana', preco: 4},{nome: 'amora', preco: 2},{nome: 'amora', preco: 2},
{nome: 'feijao', preco: 4},{nome: 'arroz', preco: 23},{nome: 'prato', preco: 243},{nome: 'geladeira', preco: 2443},{nome: 'framboesa', preco: 32},
{nome: 'mesa', preco: 232},{nome: 'cadeira', preco: 24},{nome: 'armario', preco: 232},{nome: 'madeira', preco: 2434},{nome: 'nada', preco: 0},
{nome: 'nada', preco: 0},{nome: 'nada', preco: 0},{nome: 'nada', preco: 0},{nome: 'nada', preco: 0},{nome: 'nada', preco: 0},{nome: 'nada', preco: 0}]

console.log("produtos:",produtos);
console.log("valor total dos produtos:",produtos.map(l => l.preco).reduce((a,l) => a + l)); 

console.log("quantidade de produtos:",produtos.length);