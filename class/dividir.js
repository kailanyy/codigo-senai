class Divisao{
    #x
    #y
    #resultado
    constructor(x, y){
        this.#x = x
        this.#y = y
    }
    dividir(){
        try{
              this.#resultado = this.#x / this.#y
            if(! isFinite(this.#resultado)){
                throw new Error('Erro ao dividir')
            } else {
                return this.#resultado
            }
        }catch(e){
            return e.message
        }
    }
    toString(){return 'Divisão: ' + this.#x + ' / ' + this.#y + ' = ' + this.#resultado}
}

let divisao = new Divisao(20, 10)
console.log(divisao.dividir());
// console.log(divisao.toString());