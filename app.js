let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let ListaNumerosSorteados = [];

function asiganarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto == numeroUsuario) {

        asiganarTextoElemento('p', `Acertaste al numero ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');//Evento para activar el un boton

    } else {

        //El usuario no hacerto
        if (numeroUsuario > numeroSecreto) {
            asiganarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asiganarTextoElemento('p', 'El numero secreto es mayor');
        }

        intentos++;

        LimpiarCaja();
    }
}

function reiniciarJuego() {

    //Limpiar la caja
    LimpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //Desabilitar el boton de reinicio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function LimpiarCaja() {

    let valorCaja = document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto() {

    //Metodo para generar un numero
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;;//va a retornar el numero
    console.log(numeroGenerado);
    console.log(ListaNumerosSorteados);
    //ya sortemaos todos los numeros
    if (ListaNumerosSorteados.length == numeroMaximo) {

        asiganarTextoElemento('p', 'Ya se sorteron todos los numeros posibles');
        
    } else {

        //Si el numero generado esta incluida en la lista
        if (ListaNumerosSorteados.includes(numeroGenerado)) {

            //Regresa al metodo a generar otro numero
            return generarNumeroSecreto();

        } else {

            /*Si el numero no existe en la lista lo guarda en la lista de 
            numeros sorteados y retorna un numero el cual sera el numero secreto*/
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }
    }


}

function condicionesIniciales() {

    asiganarTextoElemento('h1', 'Juego del numero secreto');
    asiganarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();



