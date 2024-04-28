//21. Solicitar al usuario un carácter y mostrar si es una vocal o consonante
//analisis de requerimiento
//ENT: caracter Como Caracter
//PRO: "Por favor ingresa un carácter"=(El carácter ingresado es una vocal)""(El carácter ingresado es una consonante)
//SAL: El carácter ingresado " + resultado + "."
//Algoritmo
//Pseudocodigo
//Algoritmo IdentificarVocalConsonante
    //Definir caracter Como Caracter
    //Escribir "Por favor ingresa un carácter:"
    //Leer caracter
    //Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
        //Escribir "El carácter ingresado es una vocal."
    //Sino
       // Escribir "El carácter ingresado es una consonante."
    //FinSi
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
// Definir una función para verificar si un carácter es vocal o consonante
function verificarCaracter(caracter) {
    // Convertir el carácter a minúscula para simplificar la comparación
    caracter = caracter.toLowerCase();

    // Verificar si el carácter es una vocal
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
        return "vocal";
    } 
    // Verificar si el carácter es una consonante
    else if ((caracter >= "a" && caracter <= "z") && !(caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u")) {
        return "consonante";
    } 
    // Si no es una letra, retornar un mensaje indicando que no es una letra válida
    else {
        return "no es una letra";
    }
}

// Pedir al usuario que ingrese un carácter
var caracter = ("L:");

// Llamar a la función para verificar el carácter ingresado y mostrar el resultado
var resultado = verificarCaracter(caracter);
write ("El carácter ingresado " + resultado + ".");