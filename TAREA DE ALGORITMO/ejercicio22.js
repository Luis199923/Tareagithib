//22. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo-
//analisis de requerimiento
//ENT: primerNombre, segundoNombre Como Caracter
//PRO: Ingrese el primer nombre(leer)""Ingrese el segundo nombre(leer)
//SAL: compararNombres
//Algoritmo
//Pseudocodigo
//Algoritmo CompararNombres
    //Definir primerNombre, segundoNombre Como Caracter
    // Pedir al usuario que ingrese dos nombres
    //Escribir "Ingrese el primer nombre:"
    //Leer primerNombre
    //Escribir "Ingrese el segundo nombre:"
    //Leer segundoNombre
    // Comparar los nombres
    //Si primerNombre = segundoNombre Entonces
        //Escribir "Los nombres son iguales."
    //Sino Si primerNombre > segundoNombre Entonces
       //Escribir primerNombre, " es mayor que ", segundoNombre
    //Sino
        //Escribir primerNombre, " es menor que ", segundoNombre
    //Fin Si
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function compararNombres() {
    // Pedir dos nombres al usuario
    let nombre1 = ("Luis:");
    let nombre2 = ("Alfredo:");
    // Comparar los nombres
    if (nombre1 === nombre2) {
        write("Los nombres son iguales.");
    } else if (nombre1 > nombre2) {
        write(nombre1 + " es mayor que " + nombre2);
    } else {
        write(nombre1 + " es menor que " + nombre2);
    }
}
// Llamar a la función para probarla
compararNombres();
