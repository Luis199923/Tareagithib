//5.Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año
//Analisis de requerimiento
//Entrada:solicitar edad + proximoAnio,
//proceso: calcular edadProximoAnio
//salida: mostrarEdadProximoAnio
//Pseudocodigo
//Algoritmo mostrarMensajeEdadProximoAnio
//Inicio
 // Solicitar al usuario su edad
 // Escribir "Por favor, ingresa tu edad:"
 // Leer edad
 // Calcular la edad del usuario en el próximo año
 // edad_proximo_anio = edad + 1
 // Mostrar un mensaje con la edad del usuario en el próximo año
 // Escribir "El próximo año tendrás", edadProximoAnio, "años."
 //FinAlgoritmo
// Definir la función para mostrar el mensaje de la edad del próximo año
const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function unir(){
 let edad = ("ingrese su edad")
  edad = read(edad)
  proximoAnio = read(edad+1)
  write(edad)
}
unir()
