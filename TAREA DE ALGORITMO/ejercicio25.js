//25. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
//analisis de requerimiento
//ENT:numero como entero
//PRO: "Por favor, ingrese un número:(leer)= (numero >, < o = 100)
//SAL: resultado
//Algoritmo
 
//Algoritmo CompararNumero
    //declaracion de variable
   // Definir numero como entero
    //Escribir "Por favor, ingrese un número:"
    //Leer numero
    // Verificar si el número es mayor, menor o igual a 100
    //Si numero > 100 Entonces
        //Escribir "El número ingresado es mayor que 100."
    //Sino
        //Si numero < 100 Entonces
            //Escribir "El número ingresado es menor que 100."
        //Sino
            //Escribir "El número ingresado es igual a 100."
        //Fin Si
    //Fin Si
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function compararNumeroCon100(numero) {
    numero = parseFloat(numero);
    if (numero > 100) {
        return "El número ingresado es mayor que 100.";
    } else if (numero < 100) {
        return "El número ingresado es menor que 100.";
    } else {
        return "El número ingresado es igual a 100.";
    }
}
let numeroUsuario = ("200:");
let resultado = compararNumeroCon100(numeroUsuario);
write(resultado);
