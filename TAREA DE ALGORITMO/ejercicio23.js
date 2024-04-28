//23. Pedir al usuario un número y mostrar si es múltiplo de 3
// analisis del requerimiento
// ENT:numero=0(leer),reciduo=0(calcular)
// PRO: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje

//Pseudocodigo
//Algoritmo VerificarMultiploDeTres
    //Definir numero, resto Como Entero
    // Solicitar al usuario que ingrese un número
    //Escribir "Por favor, ingresa un número:"
    //Leer numero
    // Verificar si el número es múltiplo de 3
    //resto <- numero MOD 3
    //Si (resto = 0) entonces
        //Escribir "El número ingresado es múltiplo de 3."
    //Sino
        //Escribir "El número ingresado NO es múltiplo de 3."
    //Fin Si
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function esMultiploDeTres(numero) {
    return numero % 3 === 0;
}
let numeroUsuario = ("21:");
numeroUsuario = parseInt(numeroUsuario);
if (esMultiploDeTres(numeroUsuario)) {
    write(numeroUsuario + " es múltiplo de 3.");
} else {
    write(numeroUsuario + " no es múltiplo de 3.");
}




