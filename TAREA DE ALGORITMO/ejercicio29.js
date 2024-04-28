//29.Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
//analisis de requerimiento
//ENT: nota Como Entero
//PRO: "Ingrese su nota en el examen:"
      //Si nota >= 60 Entonces
        //Escribir "¡Felicidades! Has aprobado el examen."
    //Sino
        //Escribir "Lo siento, has reprobado el examen."
    //FinSi
//SAL:calificarExamen
//Algoritmo
//Algoritmo AprobarExamen
    //Definir nota Como Entero
    //Escribir "Ingrese su nota en el examen:"
    //Leer nota
    //Si nota >= 60 Entonces
        //Escribir "¡Felicidades! Has aprobado el examen."
    //Sino
        //Escribir "Lo siento, has reprobado el examen."
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function calificarExamen() {
    let nota = ("70:");
    nota = parseFloat(nota);

    if (isNaN(nota)) {
        write("Por favor, ingresa una nota válida.");
    } else {
        if (nota >= 60) {
            write("¡Felicidades! Has aprobado el examen.");
        } else {
            write("Lo siento, has reprobado el examen.");
        }
    }
}
calificarExamen();
