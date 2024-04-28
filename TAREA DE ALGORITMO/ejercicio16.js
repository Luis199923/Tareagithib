//16 Pedir1 al usuario un número y mostrar si es mayor o menor que 10.
//analisis de requerimiento
//ENT: Ingrese un número:
//PRO: El número ingresado es mayor que 10(Leer)=""El número ingresado es menor que 10(Leer)=""El número ingresado es igual a 10
//SAL: El número que ingresaste es " + resultado + " que 10.
//Algoritmo
//Pseudocodigo
//Algoritmo
    //Escribir "Ingrese un número:"
    //Leer numero
    // Verificar si el número es mayor o menor que 10
    //Si numero > 10 Entonces
        //Escribir "El número ingresado es mayor que 10."
    //Sino
       // Si numero < 10 Entonces
            //Escribir "El número ingresado es menor que 10."
     // Sino
         // Escribir "El número ingresado es igual a 10."
       // Fin Si
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function compararNumero(numero) {
    if (numero > 10) {
        return "mayor";
    } else if (numero < 10) {
        return "menor";
    } else {
        return "igual";
    }
}
var numeroUsuario = parseFloat(("23:"));

var resultado = compararNumero(numeroUsuario);
write("El número que ingresaste es " + resultado + " que 10.");

