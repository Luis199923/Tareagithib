//1. Pedir 5 números y asignarlos en un arreglo
//analisis de requerimiento
//ENT: numeros5 + asignar en arreglo
//PRO: i <- 1 Hasta 5 Paso 1 Hacer ("Ingrese el número ", i, ": ")
//SAL: "Los números ingresados son:"Para i <- 1 Hasta 5 Paso 1 Hacer
//Algoritmo
//Algoritmo AsignarNumeros
    //Dimension numeros[5]

    //Para i <- 1 Hasta 5 Paso 1 Hacer
        //Escribir "Ingrese el número ", i, ": "
        //Leer numeros[i]
  //Fin Para
      //Escribir "Los números ingresados son:"
    //Para i <- 1 Hasta 5 Paso 1 Hacer
       // Escribir numeros[i]
   //Fin Para
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;  
var numeros = [];
for (var i = 0; i < 5; i++) {
    var numero = parseFloat((10 + (i + 1) + ":"));
    numeros.push(numero);
}
console.log("Los números ingresados son: " + numeros);
