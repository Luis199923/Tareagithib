//14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
//analisis de requerimiento
//ENT: primer_elemento <- arreglo[1]=""elemento_medio <- arreglo[3]=""ultimo_elemento <- arreglo[5]
//PRO:("El arreglo debe tener exactamente 5 elementos."
//SAL: mostrarElementos(arreglo);
//Algoritmo
//Algoritmo obtenerElementos
    // Declarar primer_elemento <- arreglo[1]=""elemento_medio <- arreglo[3]=""ultimo_elemento <- arreglo[5]
    //Escribir "El primer elemento es: ", primer_elemento
    //leer primere elemenro
    //Escribir "El elemento del medio es: ", elemento_medio
    //leer elemento del medio
    //Escribir "El último elemento es: ", ultimo_elemento
    //leer ultimo elemento
  //Escribir mostrarElementos(arreglo);
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function mostrarElementos(arr) {
    if (arr.length !== 5) {
        console.log("El arreglo debe tener exactamente 5 elementos.");
        return;
    }
    console.log("El primer elemento es:", arr[0]);
    console.log("El elemento del medio es:", arr[2]);
    console.log("El último elemento es:", arr[4]);
}
const arreglo = [1, 2, 3, 4, 5];
mostrarElementos(arreglo);
