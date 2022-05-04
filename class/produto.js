class Produto {
    constructor(nome, preco, qtd){
        this.nome = nome
        this.preco = preco
        this.qtd = qtd
    }
    
    calcularTotal(){
        this.total = (this.qtd * this.preco).toFixed(2)
    }

    toString(){
        return "Nome: " + this.nome + ", Preço: " + this.preco + ", Quantidade: " + this.qtd + ", Total: " + this.total
    }
}

let produto = new Produto('Samsung S22', 5400.14, 5)
let produto2 = new Produto('iPhone 13', 5414.05, 7)

produto.calcularTotal()
produto2.calcularTotal()

console.log(produto);
console.log(produto2);
console.log(produto.toString());
console.log(produto2.toString());
