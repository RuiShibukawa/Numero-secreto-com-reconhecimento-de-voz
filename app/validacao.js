function verificaSeoOChutePossuiUmValorValido(chute){
    const numero = +chute;
    if (chute.toUpperCase() === "GAME OVER.") {
        document.body.innerHTML = `
        <h2>GAME OVER!</h2>
        <h3>o número secreto era ${numeroSecreto}... deseja jogar novamente?</h3>        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    }
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';    
        return;
    }
    if (numeroForMaiorOuMenorQueOVAlorPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: número entre ${menorValor} e ${maiorValor} </div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>o número secreto era ${numeroSecreto}</h3>        
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOVAlorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();        
    }
})