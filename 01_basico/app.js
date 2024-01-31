//Variables
let numeroSecreto = 7;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    /*
    String literal o interpolación (Comilla invertida `...`)
    */
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}
