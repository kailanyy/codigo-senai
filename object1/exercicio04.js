// • Crie o objeto calculadora com os atributos x, y e resultado.
// • Crie os métodos getters e setters para as 3 propriedades do objeto;
// • Adicione os métodos adição, subtração, multiplicação e divisão.

let calc = {
    $x: 0,
    $y: 0,
    $resultado: 0,
    get valueX() {return this.$x}, 
    set valueX(newX) {this.$x = newX}, 
    get valueY() {return this.$y},
    set valueY(newY) {this.$y = newY}, 
    get soma() {return this.$resultado = this.$x + this.$y},
    get sub() {return this.$resultado = this.$x - this.$y},
    get mult() {return this.$resultado = this.$x * this.$y},
    get div() {return this.$resultado = this.$x / this.$y},
}

calc.valueX = Math.floor(Math.random() * 100)
calc.valueY = Math.floor(Math.random() * 100)

console.log("calc.soma:",calc.soma, "calc.sub:",calc.sub,"calc.mult:",calc.mult, "calc.div:",calc.div);