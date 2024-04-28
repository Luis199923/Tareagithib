//3. Solicitar al usuario dos números y mostrar su suma.
//Analisis de requerimientos: 
//los datos de las variables del problema
//Entrada: primerNumero=""(leer), segundoNumero=""(leer), suma (proceso)
//los calculos o proceso que se realizan 
// Proceso: suma=primerNumero+segundoNumero
//informacion de las variables procesadas
//salida: calcular la suma 
//Pseudocodigo:
//Algoritmo
    // Solicitar al usuario el primer número
   // Escribir "Ingrese el primer número:"
   // Leer primerNumero
    // Solicitar al usuario el segundo número
    //Escribir "Ingrese el segundo número:"
    //Leer segundoNumero
    // Convertir los números ingresados a números enteros
    //Convertir primerNumero a Entero
    //Convertir segundoNumero a Entero
    // Calcular la suma de los números ingresados
    //suma = primerNumero + segundoNumero
    // Mostrar el resultado al usuario
    //Escribir "La suma de", primerNumero, "y", segundoNumero, "es:", suma
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function resultado(){
// Solicitar al usuario el primer número
let primerNumero="",segundoNumero="",suma=""
primerNumero = read("ingrese primerNumero")
segundoNumero = read("ingrese segundo numero")
suma=primerNumero+segundoNumero
write(suma)
}
resultado()