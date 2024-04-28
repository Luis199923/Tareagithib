//13. Dado un arreglo de 5 nombres presentarlos todos
//analisis de requerimiento
//ENT: nombres como caracter[5]
//PRO:nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"]
//SAL:nombres[i]
//Algoritmo
//Algoritmo MostrarNombres
    //Definir nombres como caracter[5]
    //nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"]
    //Para i <- 1 Hasta 5 Con Paso 1 Hacer
        //Escribir nombres[i]
    //FinPara
//FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;
function imprimirNombres(nombres) {
    for (var i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
}
var nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"];

imprimirNombres(nombres);
