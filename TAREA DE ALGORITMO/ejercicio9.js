//9 Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10
//Analisis de requerimiento
//ENT:número + Multiplicar del 1 al 10
//PRO:"Ingrese un número:"( producto = numero * i)
//SAL:numero, " x ", i, " = ", producto
//ALGORITMO
//Algoritmo TablaDeMultiplicar
    //Escribir "Ingrese un número:"
    //Leer numero
    // Mostrar la tabla de multiplicar del número ingresad
    //Para i desde 1 hasta 10 hacer
       // producto = numero * i
        //Escribir numero, " x ", i, " = ", producto
    //Fin Para
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function tablaMultiplicar() {
    // Solicitar al usuario un númemro
    var numero = (5);
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    numero = parseInt(numero);
    console.log("Tabla de multiplicar del " + numero + ":");

    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Llamar a la función para empezar el programa
tablaMultiplicar();
