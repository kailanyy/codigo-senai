// A função validarPreenchimentoCampos é apenas para verificar se os campos usuário e senha estão preenchidos, 
// pegando eles pelo ID no HTML e colocando dentro de um if pra fazer a verificação 
// (se usuario OU "||" senha não estiverem preenchidos emite um alerta),
// caso contrário, roda a função de cadastrar 

function validarPreenchimentoCampos() {
  let usuario = document.getElementById('usuario').value;
  let senha = document.getElementById('senha').value; 
  
  // Se tiver dúvidas se algo está funcionando ou não, console.log pra descobrir se tem algo guadado ali :) 
  
  console.log("usuario preenchido no input:", usuario);
  console.log("senha preenchida no input:", senha);
  
  // "!" É uma negação, se usuario ou senha NÃO existirem 
  
  if(!usuario || !senha) {
  alert("Preencha os dois campos para realizar o cadastro!")
  return;
  }
  cadastrar(usuario, senha);
} 
  
  // ^^ aqui no final tem cadastrar(usuario, senha) por que chama a função daqui debaixo, caso os campos estejam preenchidos 
  
  // A função cadastrar tem como parâmetros usuário e senha 
  
  function cadastrar(usuario, senha) {
   let dadosCadastros = {
    username: usuario,
    password: senha
   }; 
  
  // No local storage precisamos de chave e valor. username a chave e usuario valor
   let cadastros = localStorage.getItem("dadosCadastros"); 
   
    if (cadastros == null) cadastros = [];
    else cadastros = JSON.parse(cadastros);
    cadastros.push(dadosCadastros);
    localStorage.setItem("dadosCadastros", JSON.stringify(cadastros))
    alert("Cadastro " + "'" + usuario + "'" + " realizado!");
    window.location="../listaCadastros/index.html" 
  } 
  
  // localStorage.getItem pega o valor salvo no localstorage 
  
  function listarCadastros() {
    let cadastros = localStorage.getItem("dadosCadastros");
    if (cadastros == null)
      alert("Ainda não há cadastros realizados.");
    else {
      //listagemRegistros é um id dentro de uma div no html
      let elementoTela = document.getElementById("listagemRegistros")
      cadastros = JSON.parse(cadastros);
      elementoTela.innerHTML += '<ul class="list-group" > <br>';
      // forEach significa tipo 'para cada', ou seja, para cada cadastro, ele vai imprimir isso na tela, meu pensamento pode estar errado masss skdkskdskjs...
      cadastros.forEach(cadastro => {
      elementoTela.innerHTML += '<li style="background-color: white;" class="list-group-item" >Nome: ' + cadastro.username + '</li>';
      elementoTela.innerHTML += '<li class="list-group-item ">Senha: ' + cadastro.password + '</li> <br>';
    });
    }
  } 
  
  function login() {
    let usuarioInput = document.getElementById('usuario').value
    let senhaInput = document.getElementById('senha').value 
  // Nessas duas linhas de cima pegamos usuário e senha pelo ID, porem alterando o nome pra usuarioInput e senhaInput 
  
    let usuariosCadastrados = JSON.parse(localStorage.getItem("dadosCadastros")); 
  //^^ JSON.parse() transforma em um objeto
  
  // Na linha abaixo, se não houver nenhum usuário cadastrado, emite um alerta 
    if (usuariosCadastrados === null) {
    alert("Não existem usuários cadastrados");
    } 

    console.log('usuariosCadastrados',usuariosCadastrados);
  // Agora indo para o for abaixo: enquanto i (ele tem valor 0) for menor que o tamanho da lista de usuários cadastrados, 
  // ele vai continuar repetindo o código dentro dele.
  // É feita uma verificação se o login está correto, caso esteja, redireciona para a lista de cadastros usando window.location 
  for (let i=0; i<usuariosCadastrados.length; i++){
      console.log('usuariosCadastrados[i].username',usuariosCadastrados[i].username);  
      if (usuarioInput === usuariosCadastrados[i].username && senhaInput === usuariosCadastrados[i].password) {
        window.location="../listaCadastros/index.html"; 
  //window.location redireciona pra outra pag que ta no HTML
  // Se o usuário e a senha não estiverem corretos, emite um alerta 
    return;
    } else {
      alert("Usuário ou senha incorretos")
    return;
    }
    }
  } 

  // Aqui é para limpar TUDO oque tem no local storage, usando localStorage.clear() 
  const limpar = function (){
    localStorage.clear();
    window.location = window.location;
  }