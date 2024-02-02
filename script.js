const nome_capitulo = document.getElementById("capitulo");
const audio_capitulo = document.getElementById("audio_capitulo");
const botao_prox = document.getElementById("proximo");
const botao_ant = document.getElementById("anterior");
const botao_play_pause = document.getElementById("play_pause");


const quantCapitulo = 10;

let taTocando = false;
let capitulo = 1;


function tocarFaixa(){
    botao_play_pause.classList.remove("bi-play-circle-fill");
    botao_play_pause.classList.add("bi-pause-circle-fill");
    audio_capitulo.play();
    taTocando = true;
}

function pausarFaixa(){
    botao_play_pause.classList.add("bi-play-circle-fill");
    botao_play_pause.classList.remove("bi-pause-circle-fill");
    audio_capitulo.pause();
    taTocando = false;
}

function TocaouPausa(){
    if (taTocando === true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}

function capituloAnterior(){
    if(capitulo === 1){
        capitulo = quantCapitulo;
    }else{
        capitulo -= 1;
    }
    audio_capitulo.src = "books/dom-casmurro/"+ capitulo +".mp3";
    nome_capitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
function proximoCapitulo(){
    if(capitulo < quantCapitulo){
        capitulo += 1;
    }else{
        capitulo = 1;
    }
    audio_capitulo.src = "books/dom-casmurro/"+ capitulo +".mp3";
    nome_capitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}


botao_play_pause.addEventListener("click", TocaouPausa);
botao_ant.addEventListener("click", capituloAnterior);
botao_prox.addEventListener("click", proximoCapitulo);
audio_capitulo.addEventListener("ended", proximoCapitulo);


