function tocar () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

while (Contador < ListaTeclas.length) {
ListaTeclas[Contador].onclick = tocar;
    Contador = Contador + 1;
    console.log(Contador);
}


