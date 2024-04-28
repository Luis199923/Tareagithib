//8.Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
//analisis de requerimiento
//ENT:nombre Como Cadena
//PRO: nombre(leer)",nombre(leer)", nombre(leer)"((var i = 0; i < 3; i++))
//SAL: mostrar el menseaje tres veces 
//Algoritmo
//Algoritmo mostrarNombreTresVeces
   // Definir nombre Como Cadena
    // Solicitar al usuario que ingrese su nombre
    //Escribir "Por favor, ingresa tu nombre: "
    //Leer nombre  
    // Mostrar el nombre del usuario tres veces en la pantalla
    //Escribir nombre
    //Escribir nombre
    //Escribir nombre
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
// Definir el nombre como "Luis"
let nombre = "Luis";

// Mostrar el nombre tres veces en la pantalla
for (var i = 0; i < 3; i++) {
    write (nombre);
}
