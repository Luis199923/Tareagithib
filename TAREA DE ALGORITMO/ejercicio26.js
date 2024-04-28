//26.Solicitar al usuario un número y mostrar si es un número de un solo dígito
//analisis de requerimiento
//ENT: numero + mostrar si es de un solo digito 
//PRO:  "Ingrese un número:"
    //Leer numero
    //Si numero >= 0 Y numero <= 9 Entonces
    // "El número ingresado es de un solo dígito."
    //Sino
        //Escribir "El número ingresado no es de un solo dígito."
//SAL: mostrar mensaje 
//Algoritmo
//Algoritmo VerificarUnSoloDigito
    //Escribir "Ingrese un número:"
    //Leer numero
    //Si numero >= 0 Y numero <= 9 Entonces
        //Escribir "El número ingresado es de un solo dígito."
    //Sino
        //Escribir "El número ingresado no es de un solo dígito."
    //FinSi
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function esNumeroDeUnSoloDigito(numero) {
    return numero.length === 1 && !isNaN(numero);
}
let numero = ("1");

if (esNumeroDeUnSoloDigito(numero)) {
    write("El número " + numero + " es un número de un solo dígito.");
} else {
    write("El número " + numero + " no es un número de un solo dígito o no es un número válido.");
}
