// 10) Em cidades menores, o alistamento para o exército acontece esporadicamente ao longo dos anos.
// Criar um programa no qual pergunte ao usuário se houve alistamento dos anos 2000 a 2009, uma pergunta para cada ano. 
// Se houve alistamento deve ser digitado “S” e se não houve alistamento “N”. Após digitar tudo, deve-se mostrar na tela o último ano que houve alistamento.
// Caso não tenha ocorrido alistamento, mostrar “Não houve alistamento nos últimos 10 anos”

let ultimoAno;

for(i = 2000; i <= 2009; i++) {
    let resposta = prompt(`Houve alistamento no ano de ${i}?`).toUpperCase()
    if (resposta === "S") {
        ultimoAno = i
    }
}

if(!ultimoAno){
    alert('Não houve alistamento nos últimos 10 anos')
} else {
    alert(`Último ano que houve alistamento: ${ultimoAno}`);
}
