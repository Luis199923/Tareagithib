//20. Pedir al usuario dos números y mostrar si son iguales o diferentes
//analisis de requerimiento
//ENT:numero1, numero2 Como Entero
//PRO: "Ingrese el primer número:"(leer)""=Ingrese el segundo número:(leer)
//SAL: compararNumeros
//Algoritmo
//Pseudocodigo
//Algoritmo numeros_iguales_o_diferentes
    // Declaración de variables
    //Definir numero1, numero2 Como Entero
    //Escribir "Ingrese el primer número:"
    //Leer numero1
   // Escribir "Ingrese el segundo número:"
    //Leer numero2
    //Si numero1 = numero2 Entonces
        //Escribir "Los números son iguales"
   // Sino
       // Escribir "Los números son diferentes"
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function compararNumeros() {
    var numero1 = parseFloat(("20:"));
    var numero2 = parseFloat(("23:"));
    if(numero1 === numero2) {
      write("Los números son iguales.");
    } else {
      write("Los números son diferentes.");
    }
}
// Llamamos a la función para que se ejecute
compararNumeros();
