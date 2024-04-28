//15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
//Analisis de requerimiento
//ENT: arreglo[5] como entero=""
//PRO: temp <- arreglo[1] + arreglo[1] <- arreglo[5] + arreglo[5] <- temp
//SAL:ARREGLO
//Algoritmo intercambiarPrimerUltimo
//Definir arreglo[5] como entero
//Definir temp como entero
// Leer Para i <- 1 Hasta 5 Hacer
    //Escribir "Ingrese el valor del elemento ", i
    //Leer arreglo[i]
//FinPara
//Escribir "El arreglo después del intercambio es:"
//Para i <- 1 Hasta 5 Hacer
    //Escribir arreglo
//FinPara
//FinAlgoritmo

function intercambiarExtremos(arreglo) {
  var temp = arreglo[0];
  // Asignar el valor del último elemento al primer elemento
  arreglo[0] = arreglo[arreglo.length - 1];
  arreglo[arreglo.length - 1] = temp;
}
var arreglo = [1, 2, 3, 4, 5];
intercambiarExtremos(arreglo);
console.log(arreglo); // Output: [5, 2, 3, 4, 1]
