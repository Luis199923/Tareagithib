//24. Solicitar al usuario un número y mostrar si es divisible por 2
//analisis de requerimiento
//ENT:numero, resto Como Entero
//PRO: "Por favor ingresa un número:"(leer)=
//SAL: mostrar si es divisible 
//Algoritmo

//Algoritmo divisiblePorDos
    //Definir numero, resto Como Entero
    //Escribir "Por favor ingresa un número:"
    //Leer numero
    //resto <- numero MOD 2
    //Si resto = 0 Entonces
        //Escribir "El número es divisible por 2."
    //Sino
        //Escribir "El número no es divisible por 2."
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function esDivisiblePorDos(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let numeroUsuario = ("6:");
let numero = parseInt(numeroUsuario);

// Verificar si el número es divisible por 2 utilizando la función
if (esDivisiblePorDos(numero)) {
    write("El número ingresado es divisible por 2.");
} else {
    write("El número ingresado NO es divisible por 2.");
}
