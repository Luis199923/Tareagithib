//10. Pedir al usuario dos números y mostrar el mayor
//analisis de requerimiento
//ENT:numero1, numero2, mayor Como Entero
//PRO:Ingrese el primer número(leer), Ingrese el segundo número(leer)
//SAL:Mostrar el mayor número
//Algoritmo
//Algoritmo encontrar_mayor
  //Definir numero1, numero2, mayor Como Entero
  //Escribir "Ingrese el primer número:"
  //Leer numero1
  //Escribir "Ingrese el segundo número:"
  //Leer numero2
  //Escribir Si numero1 > numero2 Entonces
      //mayor <- numero1
  //Sino
      //mayor <- numero2
  //Fin Si
  // Mostrar el mayor número
  //Escribir "El mayor número es:", mayor
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
// Pedimos al usuario que ingrese dos números
let numero1 = parseFloat(("23"));
let numero2 = parseFloat(("10"));
if (numero1 > numero2) {
    console.log("El primer número (" + numero1 + ") es mayor que el segundo número (" + numero2 + ").");
} else if (numero2 > numero1) {
    console.log("El segundo número (" + numero2 + ") es mayor que el primer número (" + numero1 + ").");
} else {
    console.log("Ambos números son iguales.");
}
