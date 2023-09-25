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
        console.log(Evento.code == 'Space');

        if (Evento.code == 'Space') {
            botão.classList.add('ativa');
        }

    }
    botão.onkeyup = function () {
        botão.classList.remove('ativa');
    }
}


