class Person{
    #name
    #cpf
    
    constructor(name, cpf){
        this.#name = name
        this.#cpf = cpf
    }
    
    toString(){return "name: " + this.#name + "\nCPF: " + this.#cpf}
    
    set name(name){this.#name = name}
    get name(){return this.#name}

    set cpf(cpf){this.#cpf = cpf}
    get cpf(){return this.#cpf}

    }
    
    class Client extends Person{
        #telefone
        constructor(name, telefone, cpf){
            super(name, cpf)
            this.#telefone = telefone
        }
    
        set telefone(telefone){this.#telefone = telefone}
        get telefone(){return this.#telefone}
    
        toString(){return super.toString() + "\nTelefone: " + this.#telefone}
    }
    
    const listClient = () => {
        let p = document.getElementById('result')
        let client = new Client('kailany <br>', '48991837281',' 112.444.442.70')
        
        p.innerHTML += "<b>" + client.toString() + "<b>"
    }
    listClient()