//Pedir al usuario dos números y mostrar el resultado de multiplicarlos
//analisis de requerimiento
//ENT:Definir primer_numero, segundo_numero, resultado como Entero
//PRO:primer número:(leer),+ segundo numero(leer)
//SAL:"El resultado de la multiplicación es:", resultado
//Algoritmo
//Algoritmo multiplicacion
    //Definir primer_numero, segundo_numero, resultado como Entero

    //Escribir "Ingrese el primer número:"
    //Leer primer_numero
    //Escribir "Ingrese el segundo número:"
    //Leer segundo numero
    // Calcular el resultado de la multiplicación
    //resultado <- primer_numero * segundo_numero

    // Mostrar el resultado de la multiplicación
    //Escribir "El resultado de la multiplicación es:", resultado
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function multiplicarNumeros(){
 let numero1="",numero2="",multiplicar=""
  numero1 = read("ingrese numero1:")
  numero2 = read("ingrese numero2:")
  multiplicar=numero1+" "+numero2
  write(multiplicar)
}
multiplicarNumeros()