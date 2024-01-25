//Variables
let numeroMaximoPosible = 20;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Introduce un número entre 1 y ${numeroMaximoPosible}:`));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto){
        alert(`¡Has acertado! el número es: ${numeroSecreto} lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`); //ternary operator
    } else {
        if (numeroUsuario > numeroSecreto){
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // incrementamos el contador cuando no acierta
        intentos++;

        if (intentos > maxIntentos){
            alert(`Has superado el número máximo de ${maxIntentos} intentos`);
            break;
        }
    }
}
