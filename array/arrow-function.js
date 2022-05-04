class Calc {
    add =  (a,b) => a + b
    sub =  (a,b) => a - b
    mult =  (a,b) => a * b
    div =  (a,b) => a / b
    exp =  (a,b) => a ** b
}

let calc = new Calc()
console.log(calc.add(5,4));

let calc2 = new Calc()
console.log(calc.exp(5,4));