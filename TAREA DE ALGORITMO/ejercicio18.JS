//18. Pedir al usuario un número y mostrar si es par o impar
//analisis de requerimiento
//ENT:numero, resto Como Entero
//PRO: "Ingrese un número= (El número ingresado es par)""(El número ingresado es impar)
//SAL: El número ingresado es {resultado}
//Algoritmo
//Algoritmo ParOImpar
//Definir numero, resto Como Entero
// Escribir "Ingrese un número:"
//Leer numero
//Si numero % 2 == 0 Entonces
    //Escribir "El número ingresado es par."
//Sino
    //Escribir "El número ingresado es impar."
//FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
// Definir la función para verificar si un número es par o impar
function verificarParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Pedir al usuario un número
let numeroUsuario = ("23:");

// Convertir el input del usuario a un número entero
numeroUsuario = parseInt(numeroUsuario);

// Verificar si el número es par o impar llamando a la función
let resultado = verificarParOImpar(numeroUsuario);

// Mostrar el resultado al usuario
write(`El número ingresado es ${resultado}.`);
