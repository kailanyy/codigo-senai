class Aluno {
    //constructor inicia um objeto
    constructor(nome, nota1, nota2, nota3, media){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.media = media
    }
    calcMedia(){
        this.media = ((this.nota1 + this.nota2 + this.nota3)/2).toFixed(1)
    }
    toString(){
        return"Aluno: " + this.nome + ", Nota 1:" + this.nota1 + ", Nota 2:" 
        + this.nota2 + ", Nota 3: " + this.nota3 + " Media total das notas: " + this.media
    }
}

let aluno = new Aluno('Kailany', 7, 8, 9)
aluno.calcMedia()

console.log(aluno);
console.log(aluno.toString());
