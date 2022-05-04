// class Conta{
//     #numeroAgencia
//     #numeroConta
//     #saldo
//     constructor(numeroAgencia, numeroConta, saldo){
//         this.#numeroAgencia = numeroAgencia
//         this.#numeroConta = numeroConta
//         this.#saldo = saldo
//     }

//     get numeroAgencia(){return this.#numeroAgencia}
//     set numeroAgencia(numeroAgencia){this.#numeroAgencia = numeroAgencia}

//     get numeroConta(){return this.#numeroConta}
//     set numeroConta(numeroConta){this.#numeroConta = numeroConta}

//     get saldo(){return this.#saldo}

//     depositar(valor){
//         if(valor > 0){
//             this.saldo += valor
//         }
//     }

//     sacar(valor){
//         if (valor > 0 && valor <= this.#saldo){
//             this.saldo -= this.saldo - valor
//             console.log("Saque realizado!");
//             return valor
//         } else {
//             console.log("Não é possível realizar o saque");
//         }
//     }
//     toString(){
//         return 'Agência: ' + this.#numeroAgencia
//                 + 'Conta: ' + this.#numeroConta
//                 + 'Saldo: ' + this.#saldo
//     }
// }

// let conta = new Conta('01','02', 1000)
// conta.depositar(1000)
// conta.sacar(500)
// console.log(conta.toString());

function validarPreenchimentoCampos() {
    console.log('aaa');
    let usuario = document.getElementById('usuario').value;
    let numeroAgencia = document.getElementById('numeroAgencia').value; 
    let numeroConta = document.getElementById('numeroConta').value; 

    if(!usuario || !numeroAgencia || !numeroConta) {
        alert("Preencha os dois campos para realizar o cadastro!")
        return;
    }
    cadastrar(usuario, numeroAgencia, numeroConta);
  } 

  function cadastrar(usuario, numeroAgencia, numeroConta) {
    let dadosCadastros = {
     usuario: usuario,
     numeroAgencia: numeroAgencia,
     numeroConta: numeroConta
    }; 

    let cadastros = localStorage.getItem("dadosCadastros"); 
   
    if (cadastros == null) cadastros = [];
    else cadastros = JSON.parse(cadastros);
    cadastros.push(dadosCadastros);
    localStorage.setItem("dadosCadastros", JSON.stringify(cadastros))
    alert("Cadastro realizado!");
  } 

  function login() {
    let usuarioInput = document.getElementById('usuario').value
    let numeroAgenciaInput = document.getElementById('numeroAgencia').value 
    let numeroContaInput = document.getElementById('numeroConta').value 

    let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros")); 

    if (usuariosCadastrados === null) {
        alert("Não existem usuários cadastrados no banco");
    } 

    for (i=0; i<usuariosCadastrados.length; i++){
        console.log('usuariosCadastrados[i].username',usuariosCadastrados[i].username);  
        if (usuarioInput === usuariosCadastrados[i].usuario && numeroAgenciaInput === usuariosCadastrados[i].numeroAgencia && numeroContaInput === numeroConta) {
            alert('aaaaaaaaaa')
            return;
        } else {
            alert("Usuário ou senha incorretos")
        return;
        }
    }
} 