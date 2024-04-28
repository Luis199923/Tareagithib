//34.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//Analisis de requerimiento
//"compararPrimeroyUltimoElemento" que tome un arreglo como entrada.
//Dato: si el tamaño del arreglo es igual a 5. Si no lo es, devolver un mensaje de error.
//Entrada: Obtener el primer elemento del arreglo y almacenarlo en una variable llamada "primerElemento".
// Obtener el último elemento del arreglo y almacenarlo en una variable llamada "ultimoElemento".
//proceso:"primerElemento" con "ultimoElemento":
//Salida: mostrar primerMayorUltimo 
// Fin de la función.
//Algoritmo compararElementos
    //Definir arreglo[5]: entero
    //Definir mayor: booleano
    // Leer los valores del arreglo  i <- 1 Hasta 5 Hacer
        //Escribir "Ingrese el valor del elemento ", i, ": "
        //Leer arreglo[i]
    //FinPara
    //Si arreglo[1] > arreglo[5] Entonces
        //mayor <- verdadero
    //Sino
        //mayor <- falso
    //FinSi
    //Si mayor Entonces
        //Escribir "El primer elemento es mayor que el último."
    //Sino
        //Escribir "El primer elemento NO es mayor que el último."
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function primerMayorUltimo(arreglo) {
    if (arreglo.length < 2) {
        write("El arreglo debe tener al menos dos elementos.");
        return;
    }
    if (arreglo[0] > arreglo[arreglo.length - 1]) {
        write("El primer elemento es mayor que el último.");
    } else {
        write("El primer elemento no es mayor que el último.");
    }
}
var arreglo = [5, 10, 15, 20, 25];
primerMayorUltimo(arreglo);
