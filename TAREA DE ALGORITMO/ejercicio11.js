//11 Solicitar al usuario una distancia en metros y mostrarla en centímetros
//analisis de requerimiento
//ENT: distanciaEnMetros, distancia en centimetros como Real
//PRO: distanciaEnCentimetros <- distancia_en_metros * 100
//SAL:La distancia en centímetros es:", distancia_en_centimetros
//Algoritmo
//Algoritmo ConvertirDistancia
    //Definir distancia_en_metros, distancia_en_centimetros como Real
    //Escribir "Ingrese la distancia en metros:"
    //Leer distancia_en_metros
    // Convertir la distancia a centímetros
    //distancia_en_centimetros <- distancia_en_metros * 100
    // Mostrar la distancia en centímetros
    //Escribir "La distancia en centímetros es:", distancia_en_centimetros
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Pedir al usuario que ingrese la distancia en metros
const distanciaMetros = ("5");
const distanciaCentimetros = distanciaMetros * 100
console.log("La distancia en centímetros es:", distanciaCentimetros);
