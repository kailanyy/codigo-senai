class Loja{
    #nome
    #cnjp
    #localizacao
    constructor(nome, cnpj){
        this.#nome = nome
        this.#cnjp = cnpj
    }

    get nome(){return this.#nome}
    set nome(nome){this.#nome = nome}

    get cnpj(){return this.#cnjp}
    set cnpj(cnpj){this.#cnjp = cnpj}

    get localizacao(){return this.#localizacao}
    set localizacao(localizacao){this.#localizacao = localizacao}
}

let loja = new Loja('Americanas', '345.667.71-109')
console.log('loja:',loja);
console.log('loja.nome, loja.cnpj, loja.localizacao:',loja.nome, loja.cnpj);
loja.nome = 'Casas Bahia'
loja.cnpj = '123.456.789-10'
loja.localizacao = 'Florianópolis'
console.log('loja.nome, loja.cnpj, loja.localizacao',loja.nome, loja.cnpj, loja.localizacao);
