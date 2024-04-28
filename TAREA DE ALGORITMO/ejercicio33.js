//33.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
//El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
//Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
//analisis de requerimiento
//ENT: numeroPersonas, costoPorPersona, presupuestoSinIva, presupuestoConIva 
//PRO: Ingrese el número de personas para el evento:"
//    Si numero_personas <= 100 Entonces
        //costo_por_persona = 20.00
    //Sino Si numero_personas > 100 Y numero_personas <= 200 Entonces
        //costo_por_persona = 15.00
    //Sino
        //costo_por_persona = 10.00
    //Fin Si
//SAL: presentarPresupuesto
//Algoritmo
//Algoritmo Presupuesto_Banquetes
    // Definir variables
    //Definir numero_personas, costo_por_persona, presupuesto_sin_iva, presupuesto_con_iva Como Real
    //Escribir "Ingrese el número de personas para el evento:"
    //Leer numero_personas
    //Si numero_personas <= 100 Entonces
        //costo_por_persona = 20.00
    //Sino Si numero_personas > 100 Y numero_personas <= 200 Entonces
        //costo_por_persona = 15.00
    //Sino
        //costo_por_persona = 10.00
    //Fin Si
    //presupuesto_sin_iva = numero_personas * costo_por_persona

    //presupuesto_con_iva = presupuesto_sin_iva * 1.15
    
    //Escribir "El presupuesto para el evento es: $", presupuesto_con_iva
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
function calcularPresupuesto(numeroPersonas) {
    let costoPorPlatillo = 0;
    
    if (numeroPersonas > 200) {
        costoPorPlatillo = 10.00;
    } else if (numeroPersonas > 100) {
        costoPorPlatillo = 15.00;
    } else {
        costoPorPlatillo = 20.00;
    }
    
    let costoTotal = numeroPersonas * costoPorPlatillo;
    let iva = costoTotal * 0.15;
    let costoTotalConIva = costoTotal + iva;
    
    return costoTotalConIva;
}

function presentarPresupuesto(numeroPersonas) {
    let presupuestoTotal = calcularPresupuesto(numeroPersonas);
    write("El presupuesto total a presentar es: $" + presupuestoTotal.toFixed(2));
}
let numeroPersonas = parseInt("100:");
presentarPresupuesto(numeroPersonas);

