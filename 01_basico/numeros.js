let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite el numero:'));
    suma -= numero;
}

let promedio = suma / qtdNumeros;

console.log(promedio);
