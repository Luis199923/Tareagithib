//1 Pedir al usuario su nombre y saludarlo
//Analisis requerimientos:
//los datos o variables del problema
//Entrada:nombreUsuario="(leer)", saludo ="(leer)", generar saludo al usuario 
//los calculo o proceso que se hacen con las variables
//Proceso: mostrarMensaje= "nombreUsuario", + "saludo al usuario" 
//salida: saludo al usuario 
//Pseudocodigo:
//Algoritmo unir
//pedir sl usuario su nombre 
// nombre = solicitarNombre(luis)
// Saludar al usuario utilizando su nombre
// saludo = "¡Hola, " + nombre + "! Bienvenido."
// Mostrar el saludo al usuario
//mostrarSaludo( hola luis )
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log;  
function mostrar(){ 
    let = nombreUsuario="",saludo="",mensaje=""
     nombreUsuario = read("ingrese nombreUsuario")
     saludo = read("ingrese saludo")
     mensaje=nombreUsuario+""+saludo
    write(saludo)
}
// ejecuta la funcion
 mostrar()