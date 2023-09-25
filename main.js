function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < ListaTeclas.length) {

    const tecla = ListaTeclas[Contador].classList[1];


    const idAudio = `#som_${tecla} `
    ListaTeclas[Contador].onclick = function () {
        tocar(idAudio);
    }

    Contador = Contador + 1;

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function() {
        tecla.classList.add('ativa');
    }
    }


