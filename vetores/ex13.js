// 13) Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 0) 
// e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.
// ======== MENU ========
// 1- Cadastrar nome
// 2- Excluir um nome
// 3- Editar um nome
// 4- Pesquisar se um nome está cadastrado
// 5- Listar todos os nomes cadastrados
// 0- Sair do programa

let listaNome = []
let opcao = 1;

while(opcao !== 0){
    opcao = Number(prompt(`Escolha uma opção:\n1 - Cadastrar nome\n2 - Excluir um nome\n3 - Editar um nome
    \n4 - Pesquisar se um nome está cadastrado\n5 - Listar todos os nomes cadastrados\n0 - Sair do programa`));

    if(opcao === 1){
        listaNome.push(prompt("Digite o seu nome"))
    }

    if(opcao === 2){
        if(listaNome.length){
            let nomeExcluir = prompt(`Qual nome excluir?\n${listaNome}`)
            let indice = listaNome.findIndex(function(nomeAtual){
                return nomeAtual === nomeExcluir
            })
        
            if(indice !== -1){
                listaNome.splice(indice, 1); 
                alert("Nome excluído")
            } 
        } else {
            alert("Não há nomes à excluir");
        }   
    }

    if(opcao === 3){
        if(listaNome.length){        
            let nomeDesejado = prompt(`Qual nome editar?\n${listaNome}`)

            let indice = listaNome.findIndex(function(nomeAtual){
                return nomeAtual === nomeDesejado
            });
            
            if(indice !== -1){
                listaNome[indice] = prompt("Insira o novo nome")
            } else {
                alert("Esse nome não existe")
            }
        }
        console.log("listaNome",listaNome);
    }

    if(opcao === 4){
        let nomePesquisado = prompt(`Digite um nome`)

        let indice = listaNome.findIndex(function(nomeAtual){
            return nomePesquisado === nomeAtual
        });

        if(indice != -1){
            alert(`${nomePesquisado} está cadastrado`)
        } else {
            alert("Esse nome não existe")
        }
    }

    if(opcao === 5){
        alert(`Nomes cadastrados:\n${listaNome}`)
    }
}