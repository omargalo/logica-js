//Variables
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = "intento";
let maxIntentos = 3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Introduce un número entre 1 y 10:");

    console.log(numeroUsuario);

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
        //palabraIntentos = "intentos";

        if (intentos > maxIntentos){
            alert(`Has superado el número máximo de ${maxIntentos} intentos`);
            break;
        }
    }
}
