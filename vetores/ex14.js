// 14) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode montar seu sorvete com até 4 bolas (sabores). 
// Criar um programa que simule esse sistema.

// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// ======== MENSAGENS e VALIDAÇÕES ========
// Opção 1-> “Sabor adicionado!”   OU   “Limite de sabores atingido, remova um sabor!”
// Opção 2-> “Sabor removido!”   OU   “Não existem sabores adicionados!”
// Opção 3-> “"Camada 1 - Sabor X, Camada 2 - Sabor Y, etc.”   OU   “Seu sorvete não possui sabores!”
// Opção 4-> “Pedido realizado!”   OU   “Adicione pelo menos um sabor!”

let sabores = []
let opcao;

while(opcao !== 0){
    opcao = Number(prompt(`1- Adicionar sabor\n2- Remover sabor\n3- Visualizar sorvete\n4- Finalizar pedido`));
    if(opcao === 1){
        if(sabores.length < 4){
            sabores.push(prompt("Adicione um sabor"))
            alert("Sabor adicionado!")
        } else {
            alert("Limite de sabores atingido, remova um sabor!")
        }
    }

    if(opcao === 2){
        let excluirSabor = prompt(`Qual sabor excluir?\n${sabores}`)
        let indice = sabores.indexOf(excluirSabor)
        if(indice !== -1){
            sabores.splice(indice, 1)
            alert("Sabor removido!")
        } else {
            alert("Não existem sabores adicionados!")
        }
    }

    if(opcao === 3){
        let mensagemVisualizacao = ""
        for(i = 0; i < sabores.length; i++){
            mensagemVisualizacao += `Camada ${i+1} - Sabor: ${sabores[i]}\n`
        }
        if(mensagemVisualizacao === ""){
            alert("Seu sorvete não possui sabores!")
        } else {
            alert(mensagemVisualizacao)
        }
    }

    if(opcao === 4){
        if(sabores.length){
            alert("Pedido realizado!")
            opcao = 0
        } else {
            alert("Adicione pelo menos um sabor!")
        }
    } 
}
