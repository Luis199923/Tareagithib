//4. Pedir al usuario un número y mostrar su doble
//Analisis de requerimientos:
// Entrada: numero=""(leer),doble=""(leer), calcular=(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: calcular=numero+doble
// La informacion de las variable
// Salida: calcular
//Pseudocodigo:
//Algoritmo doble 
// Pedir al usuario un número
//Escribir "Por favor, introduce un número:"
//Leer numero
// Convertir el valor ingresado a un número entero
//numero <- ConvertirAEntero(numero)
// Calcular el doble del número ingresado
//doble <- numero * 2
// Mostrar el doble del número ingresado
//Escribir "El doble de ", numero, " es: ", doble 
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
//se crea la funcion 
function respuesta(){ 
   let numero = ("ingrese numero")
    numero = read(numero)
    doble = read(numero*2)
    write(numero)
}
// se llama o se ejecuta la funcion
respuesta()