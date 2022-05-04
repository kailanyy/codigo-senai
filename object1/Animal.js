class Animal{
    #nome
    constructor(nome){this.#nome = nome}
    toString(){return 'Nome: ' + this.#nome}
    getFalar(){return 'Animal fala!'}
    set nome(nome){this.#nome = nome}
    get nome(){return this.#nome}
}

class Gato extends Animal{
    #raca
    constructor(nome, raca){super(nome), this.#raca = raca}
    getFalar(){return 'Gato mia!'}
    set raca(raca){this.#raca = raca}
    get raca(){return this.#raca}
    toString(){return super.toString() + '<br>Raça: ' + this.#raca}
}

class Cachorro extends Animal{
    #idade
    constructor(nome, idade){super(nome), this.#idade = idade}
    set idade(idade){this.#idade = idade}
    get idade(){return this.#idade}
    getFalar(){return 'Cachorro late!'}
    toString(){return super.toString() + '<br>Idade: ' + this.#idade}
}

// let animal = new Animal('Gambá')
// console.log(animal.toString());

// let gato = new Gato('Garfield','Bengal')
// let cachorro = new Cachorro('Max', 15)
// console.log(gato.toString());
// console.log(cachorro.toString());
// console.log(animal.getFalar(), gato.getFalar(), cachorro.getFalar());

const listAnimais = () => {
    let p = document.getElementById('resultado')
    let animal = new Animal('Gambá')
    let gato = new Gato('Garfield','Bengal')
    let cachorro = new Cachorro('Max', 15)

    p.innerHTML += '<b>' + animal.toString() + '<b><br>' +
    '<b>' + gato.toString() + '<b><br>' +
    '<b>' + cachorro.toString() + '<b><br>'
}
listAnimais()