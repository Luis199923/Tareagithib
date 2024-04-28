//27.Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA
//analisis de requerimiento
//ENT: montoFactura, porcentajeIVA, montoIVA, montoTotal como Real
//PRO: "Ingrese el monto total de la factura", "Ingrese el porcentaje de IVA aplicado: "=montoIVA <- montoFactura * (porcentajeIVA / 100)
//SAL: ("El monto total a pagar, incluyendo el IVA, es: " + montoTotalPagar)
//Algoritmo
//Proceso CalcularMontoConIVA
    //Definir montoFactura, porcentajeIVA, montoIVA, montoTotal como Real
    //Escribir "Ingrese el monto total de la factura: "
    //Leer montoFactura
    //Escribir "Ingrese el porcentaje de IVA aplicado: "
    //Leer porcentajeIVA
    //montoIVA <- montoFactura * (porcentajeIVA / 100)
    //montoTotal <- montoFactura + montoIVA
    //Escribir "El monto total a pagar incluyendo el IVA es: ", montoTotal
//FinProceso

const read = require('prompt-sync')();
const write = console.log;
function calcularTotalConIVA() {
    var montoTotal = parseFloat("500:");
    var porcentajeIVA = parseFloat("15:");
    var iva = montoTotal * (porcentajeIVA / 100);
    var montoTotalPagar = montoTotal + iva;
    write("El monto total a pagar, incluyendo el IVA, es: " + montoTotalPagar);
}
calcularTotalConIVA();
