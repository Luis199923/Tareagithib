//22. Dado un arreglo de 5 elementos presentar la suma de dichos elementos
//analisis de requerimiento
//ENT: 5 elementos(leer)+suma de elementos(leer)=calcular 
//PRO:Definimos un arreglo con 5 elementos"(arreglo = [1, 2, 3, 4, 5];)
//SAL:("La suma de los elementos del arreglo es:", sumaArreglo(arreglo)
//Algoritmo suma de elementos
//Declarar arreglo[5]: entero + suma, i: entero 
// Leer: los valores del arreglo Para i = 0 Hasta 4 Hacer
    //Escribir "Ingrese el elemento ", i+1, ": "
    //Leer arreglo[i]
//FinPara
// Calcular la suma de los elementos del arreglo
//Para i = 0 Hasta 4 Hacer
    //suma = suma + arreglo[i]
//FinPara
// Mostrar la suma de los elementos del arreglo
//Escribir "La suma de los elementos del arreglo es: ", suma
//FinAlgoritmo

const arreglo = [1, 2, 3, 4, 5];

function sumaArreglo(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
console.log("La suma de los elementos del arreglo es:", sumaArreglo(arreglo));
