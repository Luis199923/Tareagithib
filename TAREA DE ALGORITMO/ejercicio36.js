//36.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
//Analisis de requerimiento
//ENT:INDICAR cual de los elementos es el mayor
//PRO:"Ingrese el primer elemento:"(leer)+"Ingrese el segundo elemento:"(leer)+"Ingrese el tercer elemento:"(leer)
//SAL: Imprimir el elemento mayor
//ALGORITMO
//Algoritmo encontrarMayor
    //Escribir "Ingrese el primer elemento:"
    //Leer arreglo[1]
    //Escribir "Ingrese el segundo elemento:"
    //Leer arreglo[2]
    //Escribir "Ingrese el tercer elemento:"
    //Leer arreglo[3]
    // Suponer que el primer elemento es el mayor
    //mayor <- arreglo[1]
    //Si arreglo[2] > mayor entonces
        //mayor <- arreglo[2]
    //F  inSi
    //Si arreglo[3] > mayor entonces
        //mayor <- arreglo[3]
   // FinSi
    //Escribir "El elemento mayor es:", mayor
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function encontrarMayor(arr) {
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }
    return mayor;
}
const arreglo = [10, 5, 8];
const mayor = encontrarMayor(arreglo);
write("El mayor elemento es:", mayor);
