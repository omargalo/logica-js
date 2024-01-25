// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
const diaSemana = prompt("¿Qué día de la semana es?");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    console.log("¡Buen fin de semana!");
} else {
    console.log("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
const numero = prompt("Ingrese un número:");
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar."
const puntuacion = prompt("Ingrese su puntuación:");
if (puntuacion >= 100) {
    console.log("¡Felicidades, has ganado!");
} else {
    console.log("Intenta nuevamente para ganar.");
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
const saldo = 500;
console.log(`Su saldo actual es: ${saldo}`);

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
const nombre = prompt("Ingrese su nombre:");
alert(`¡Bienvenido, ${nombre}!`);
