let select = document.querySelector('select')
let paragrafo = document.querySelector('#paragrafo')

select.addEventListener('change', setProduto)

    function setProduto(){
        let opcao = "Produto: " + select.value
        if(select.value == boloRedVelvet) {
            resultado += "\nValor da Fatia: $17"
        } else if (select.value == brownie) {
           resultado += "\nValor: $8"
        } else if (select.value == café) {
            resultado += "\nValor: $18"
        }
        paragrafo.textContent = opcao
    }
    