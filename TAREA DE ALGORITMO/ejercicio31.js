//31.Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
//analisis de requerimiento
//ENT: sueldoMensual, sueldoAnual, excedente, impuestoExcedente, sueldoNetoAnual 
//PRO: sueldoMensual
//  sueldo_anual <- sueldo_mensual * 12
    //Si sueldo_anual > 30000 Entonces
        //excedente <- sueldo_anual - 30000
        //impuesto_excedente <- excedente * 0.15
        //sueldo_neto_anual <- sueldo_anual - impuesto_excedente
    //FinSi
//SAL:Tu sueldo neto anual  + sueldoNetoAnual
//Algoritmo
//Algoritmo CalculoSueldoAnual
    //Definir sueldo_mensual, sueldo_anual, excedente, impuesto_excedente, sueldo_neto_anual Como Real

    //Escribir "Ingrese su sueldo mensual:"
    //Leer sueldo_mensual
    //sueldo_anual <- sueldo_mensual * 12
    //Si sueldo_anual > 30000 Entonces
        //excedente <- sueldo_anual - 30000
        //impuesto_excedente <- excedente * 0.15
        //sueldo_neto_anual <- sueldo_anual - impuesto_excedente
    //FinSi
    //Escribir "Su sueldo neto anual es:", sueldo_neto_anual
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function calcularSueldoNetoAnual(sueldoMensual) {
    let sueldoAnual = sueldoMensual * 12;
    if (sueldoAnual > 30000) {
        let excedente = sueldoAnual - 30000;
        let impuesto = excedente * 0.15;
        let sueldoNetoAnual = sueldoAnual - impuesto;
        return sueldoNetoAnual;
    } else {
        return sueldoAnual;
    }
}
let sueldoMensual = parseFloat("5000 ");

let sueldoNetoAnual = calcularSueldoNetoAnual(sueldoMensual);
write("Tu sueldo neto anual es: " + sueldoNetoAnual);
