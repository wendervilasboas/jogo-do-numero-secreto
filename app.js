let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function gerarNumeroAleatorio(){ //funcao sem parametro COM RETORNO
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeNumerosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){ //verificar se o numero esta na lista
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Bem-vindo ao mundo dev';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
function exibirTextoNaTela(tag, texto){ //funcao com parametros
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function limparCampo(){
    document.querySelector('input').value = '';

}

function verificarChute(){//funcao sem parametro
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //se tentativas > 1 entao tentativas, senão tentativa
        let mensagemTentativa = 'Você descobriu o número secreto com ' +tentativas+ ' ' +palavraTentativa+ '.';
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); //remover atributo disabled do botao de id=reiniciar
    }
    else{
            if(chute > numeroSecreto){
                exibirTextoNaTela('p', 'O número secreto é menor.');
            }
            else{
                exibirTextoNaTela('p', 'O número secreto é maior.');
            }
            tentativas++;
            limparCampo();
    }
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


