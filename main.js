function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < ListaTeclas.length) {

    const tecla = ListaTeclas[Contador].classList[1];


    const idAudio = `#som_${tecla} `
    console.log(idAudio);

    ListaTeclas[Contador].onclick = function () {
        tocar
    };
    Contador = Contador + 1;
    console.log(Contador);
}


