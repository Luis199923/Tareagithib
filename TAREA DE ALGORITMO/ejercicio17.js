//17. Solicitar al usuario su edad y mostrar si es mayor o menor de edad
//analisis de requerimiento
//ENT:edad Como Entero
//PRO: "Por favor ingresa tu edad ="" Eres mayor de edad""= Escribir "Eres menor de edad
//SAL:verificarEdad
//Algoritmo
//Algoritmo MostrarMayorMenorEdad
    //Definir edad Como Entero
    //Escribir "Por favor ingresa tu edad: "
    //Leer edad
   //Si edad >= 18 Entonces
        //Escribir "Eres mayor de edad."
    //Sino
        //Escribir "Eres menor de edad."
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function verificarEdad() {
    // Solicitamos al usuario su edad
    var edad = ("23:");
    edad = parseInt(edad);
    // Verificamos si la edad es mayor o igual a 18
    if (edad >= 18) {
        write("Eres mayor de edad.");
    } else {
        write("Eres menor de edad.");
    }
}
verificarEdad();
