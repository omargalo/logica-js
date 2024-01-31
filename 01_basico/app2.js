//Variables
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = "intento";

while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Introduce un número entre 1 y 10:");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto){
        alert(`¡Has acertado! el número es: ${numeroSecreto} lo hiciste en ${intentos} ${palabraIntentos}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        intentos++;
        palabraIntentos = "intentos";

        if (intentos > 3){
            alert("Has superado el número de intentos");
            break;
        }
    }
}
