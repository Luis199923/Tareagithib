//28.Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento
////analisis de requerimiento
//ENT: precioProducto, porcentajeDescuento, descuento, precioFinal como Real
//PRO: "Ingrese el precio del producto:"(leer)""."Ingrese el porcentaje de descuento aplicado:"(leer)""= precioProducto * (porcentajeDescuento / 100)
//SAL: El precio final luego de aplicar el descuento es:", precioFinal
//Algoritmo
//Proceso DescuentoProducto
    //Definir precioProducto, porcentajeDescuento, descuento, precioFinal como Real
    //Escribir "Ingrese el precio del producto:"
    //Leer precioProducto
    //Escribir "Ingrese el porcentaje de descuento aplicado:"
    //Leer porcentajeDescuento
    //descuento = precioProducto * (porcentajeDescuento / 100)
    //precioFinal = precioProducto - descuento
    //Escribir "El precio final luego de aplicar el descuento es:", precioFinal
//FinProceso
const read = require('prompt-sync')();
const write = console.log;
// Definir una función para calcular el precio final después de aplicar el descuento
function calcularPrecioFinal(precio, descuentoPorcentaje) {
    let descuento = (precio * descuentoPorcentaje) / 100;
    let precioFinal = precio - descuento;
    return precioFinal;
}
let precioProducto = parseFloat("60:");
let porcentajeDescuento = parseFloat("25:");
let precioFinal = calcularPrecioFinal(precioProducto, porcentajeDescuento);

write ("El precio final después de aplicar el descuento es: $" + precioFinal.toFixed(2));
