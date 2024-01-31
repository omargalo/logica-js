let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let intentosMaximos = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Adivinaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó, se le da una pista.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarInputBox();
    }
    return;
}

function limpiarInputBox() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * intentosMaximos) + 1;
    console.log('Número generado: ', numeroGenerado);
    console.log('Lista de números sorteados: ', listaNumerosSorteados);

    //Si ya sorteamos todos los números posibles.
    if (listaNumerosSorteados.length == intentosMaximos) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
      //Si el número generado esta incluido en la lista de números sorteados, se vuelve a generar.
      if (listaNumerosSorteados.includes(numeroGenerado)) {
        //Recursividad
        return generarNumeroSecreto();
      } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingresa un número entre 1 y ${intentosMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarInputBox();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
