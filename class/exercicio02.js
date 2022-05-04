class Cliente {
    constructor (nome, email, whatsapp, twitter){
        this.nome = nome
        this.email = email
        this.whatsapp = whatsapp
        this.twitter = twitter
    }
    toString(){
        return"Cliente: " + this.nome + ", e-mail: " + this.email + ", whatsapp: " + this.whatsapp + ", twitter: " + this.twitter
    }
}

for(i = 1; i < 11; i++){
    let cliente = new Cliente ('Kailany'+i, 'kailanyiaramenco@gmail.com'+i, '48 99116-0976'+i, 'ddamagged'+i)
    console.log(cliente.toString());

} 
