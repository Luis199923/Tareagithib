//19. Solicitar al usuario un número y mostrar si es positivo o negativo
//analisis de requerimiento
//ENT: numero" positivo o negativo"
//PRO:"Por favor, ingresa un número"= El número ingresado es positivo(leer)"""El número ingresado es negativo(leer)""El número ingresado es cero(leer)
//SAL: (resultado)
//Algoritmo
//Algoritmo
//Pseudocodigo
  //Escribir "Por favor, ingresa un número: "
  //Leer numero
 // Si numero > 0 Entonces
  // Escribir "El número ingresado es positivo."
  //Sino Si numero < 0 Entonces
   //Escribir "El número ingresado es negativo."
  //Sino
   //Escribir "El número ingresado es cero."
 //Fin Si
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;
function verificarNumero(numero) {
    if (numero > 0) {
        return "El número ingresado es positivo.";
    } else if (numero < 0) {
        return "El número ingresado es negativo.";
    } else {
        return "El número ingresado es cero.";
    }
}
let numeroUsuario = ("23:");
// Convertir la entrada a un número
numeroUsuario = parseFloat(numeroUsuario);
let resultado = verificarNumero(numeroUsuario);
console.log(resultado);
