function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < ListaTeclas.length) {
    const botão = ListaTeclas[Contador];
    const tecla = botão.classList[1];



    const idAudio = `#som_${tecla} `
    botão.onclick = function () {
        tocar(idAudio);
    }

    Contador = Contador + 1;

    botão.onkeydown = function (Evento) {

        if (Evento.code === 'Space' || Evento.code === 'Enter') {
            botão.classList.add('ativa');
        }

    }
    botão.onkeyup = function () {
        botão.classList.remove('ativa');
    }
}


