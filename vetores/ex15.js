// 15) Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. 
// De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. 
// Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância total (km) da viagem.

// Bruxelas <-> Berlim = 764km
// Berlim <-> Praga = 350km
// Praga <-> Viena = 292km
// Viena <-> Budapeste = 242km

let cidadeOrigem = prompt("Digite a cidade de origem").toLowerCase()
let cidadeDestino = prompt("Digite a cidade de destino").toLowerCase()

let bruxelasBerlim = 764
let berlimPraga = 350
let pragaViena = 292
let vienaBudapeste = 242

if(cidadeOrigem === "bruxelas"){
    if(cidadeDestino === "berlim"){
        alert(`A distância é de: ${bruxelasBerlim}km`)
    }
    if(cidadeDestino === "praga"){
        alert(`A distância é de: ${bruxelasBerlim + berlimPraga}km`)
    }
    if(cidadeDestino === "viena"){
        alert(`A distância é de: ${bruxelasBerlim + berlimPraga + pragaViena}km`)
    }
    if(cidadeDestino === "budapeste"){
        alert(`A distância é de: ${bruxelasBerlim + berlimPraga + pragaViena + vienaBudapeste}km`)
    }
} 

if(cidadeOrigem === "berlim"){
    if(cidadeDestino === "budapeste"){
        alert(`A distância é de: ${berlimPraga + pragaViena + vienaBudapeste}km`)
    }
    if(cidadeDestino === "viena"){
        alert(`A distância é de: ${berlimPraga + pragaViena}km`)
    }
    if(cidadeDestino === "praga"){
        alert(`A distância é de: ${berlimPraga}km`)
    }
    if(cidadeDestino === "bruxelas"){
        alert(`A distância é de: ${bruxelasBerlim}km`)
    }
}

if(cidadeOrigem === "praga"){
    if(cidadeDestino === "budapeste"){
        alert(`${pragaViena + vienaBudapeste}km`)
    }
    if(cidadeDestino === "viena"){
        alert(`${pragaViena}km`)
    }
    if(cidadeDestino === "bruxelas"){
        alert(`${berlimPraga + bruxelasBerlim}km`)
    }
    if(cidadeDestino === "berlim"){
        alert(`${berlimPraga}km`)
    }
}

if(cidadeOrigem === "budapeste"){
    if(cidadeDestino === "viena"){
        alert(`${vienaBudapeste}km`)
    }
    if(cidadeDestino === "bruxelas"){
        alert(`${vienaBudapeste + pragaViena + berlimPraga + bruxelasBerlim}km`)
    }
    if(cidadeDestino === "berlim"){
        alert(`${vienaBudapeste + pragaViena + berlimPraga}km`)
    }
    if(cidadeDestino === "praga"){
        alert(`${vienaBudapeste + pragaViena}km`)
    }
}

if(cidadeOrigem === "viena"){
    if(cidadeDestino === "budapeste"){
        alert(`${vienaBudapeste}km`)
    }
    if(cidadeDestino === "bruxelas"){
        alert(`${pragaViena + berlimPraga + bruxelasBerlim}km`)
    }
    if(cidadeDestino === "berlim"){
        alert(`${berlimPraga + pragaViena}km`)
    }
    if(cidadeDestino === "praga"){
        alert(`${pragaViena}km`)
    }
}