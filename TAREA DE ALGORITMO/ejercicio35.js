//35. Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
//analisis de requerimiento
//ENT: [elemento1, elemento2, elemento3, elemento4, elemento5]
//PRO: //Si verificarParImpar(arreglo1) Entonces
            //Escribir "El primer elemento es par y el último elemento es impar en el primer arreglo."
        //Sino
            //Escribir "El primer elemento no es par o el último elemento no es impar en el primer arreglo."
        //FinSi
        
        //Si verificarParImpar(arreglo2) Entonces
            //Escribir "El primer elemento es par y el último elemento es impar en el segundo arreglo."
        //Sino
            //Escribir "El primer elemento no es par o el último elemento no es impar en el segundo arreglo."
        //FinSi
//salida primerElementoPar "" ultimoElementoImpar
//Algoritmo VerificarParImpar
        //primerElementoPar <- arreglo[1] MOD 2 == 0
        //ultimoElementoImpar <- arreglo[Largo(arreglo)] MOD 2 <> 0
        //retornar primerElementoPar Y ultimoElementoImpar
    //FinFuncion
        //Definir arreglo1, arreglo2 como vector de entero
        //arreglo1 <- [2, 4, 6, 8, 9]
        //arreglo2 <- [1, 3, 5, 7, 9]

        //Si verificarParImpar(arreglo1) Entonces
            //Escribir "El primer elemento es par y el último elemento es impar en el primer arreglo."
        //Sino
            //Escribir "El primer elemento no es par o el último elemento no es impar en el primer arreglo."
        //FinSi
        
        //Si verificarParImpar(arreglo2) Entonces
            //Escribir "El primer elemento es par y el último elemento es impar en el segundo arreglo."
        //Sino
            //Escribir "El primer elemento no es par o el último elemento no es impar en el segundo arreglo."
        //FinSi
    //FinProceso

//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function verificarParImpar(arreglo) {
    let primerElementoPar = arreglo[0] % 2 === 0;
    let ultimoElementoImpar = arreglo[arreglo.length - 1] % 2 !== 0;
    return primerElementoPar && ultimoElementoImpar;
}
let arreglo1 = [2, 4, 6, 8, 9];
let arreglo2 = [1, 3, 5, 7, 9];
if (verificarParImpar(arreglo1)) {
    write("El primer elemento es par y el último elemento es impar en el primer arreglo.");
} else {
    write("El primer elemento no es par o el último elemento no es impar en el primer arreglo.");
}

if (verificarParImpar(arreglo2)) {
    write("El primer elemento es par y el último elemento es impar en el segundo arreglo.");
} else {
    write("El primer elemento no es par o el último elemento no es impar en el segundo arreglo.");
}
