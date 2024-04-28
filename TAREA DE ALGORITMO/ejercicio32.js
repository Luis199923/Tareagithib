//17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
//Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
//Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.
//Realice un algoritmo para determinar la ganancia obtenida
//analisis de requerimiento
//ENT: variables 
//PRO: tipoDeBanano  tamañoDeBanano  precioInicial  pesoDelEmbarque  montoTotal
//Si tipo_de_banano = "A" Entonces
        //Si tamaño_de_banano = 1 Entonces
            //precio_inicial <- precio_inicial + 2
        //Sino
            //precio_inicial <- precio_inicial + 3
        //FinSi
    //Sino
        //Si tamaño_de_banano = 1 Entonces
            //precio_inicial <- precio_inicial - 3
        //Sino
            //precio_inicial <- precio_inicial - 5
        //FinSi
    //FinSi
//SAL: precioFinal
//Algoritmo 
    // Declarar variables
    // Solicitar al usuario el tipo y tamaño del banano
    //Escribir "Ingrese el tipo de banano (A o B): "
    //Leer tipo_de_banano
    //Escribir "Ingrese el tamaño del banano (1 o 2): "
    //Leer tamaño_de_banano
    // Definir el precio inicial por kilo según el tipo y tamaño del banano
    //Si tipo_de_banano = "A" Entonces
        //Si tamaño_de_banano = 1 Entonces
            //precio_inicial <- precio_inicial + 2
        //Sino
            //precio_inicial <- precio_inicial + 3
        //FinSi
    //Sino
        //Si tamaño_de_banano = 1 Entonces
            //precio_inicial <- precio_inicial - 3
        //Sino
            //precio_inicial <- precio_inicial - 5
        //FinSi
    //FinSi
    //Escribir "Ingrese el peso del embarque en kilogramos: "
    //Leer peso_del_embarque
    //monto_total <- precio_inicial * peso_del_embarque

    //Escribir "El productor recibirá un monto total de $" + monto_total
//FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
function calcularPrecioFinal(tipo, tamaño, precioInicial) {
    let precioFinal = precioInicial;
    if (tipo === 'A') {
        if (tamaño === 1) {
            precioFinal += 2;
        } else if (tamaño === 2) {
            precioFinal += 3;
        }
    } else if (tipo === 'B') {
        if (tamaño === 1) {
            precioFinal -= 3;
        } else if (tamaño === 2) {
            precioFinal -= 5;
        }
    }
    return precioFinal;
}
const precioInicial = 10; // Precio inicial por kilo de banano
const tipoBanano = 'A'; // Tipo de banano ('A' o 'B')
const tamañoBanano = 2; // Tamaño de banano (1 o 2)
const precioFinal = calcularPrecioFinal(tipoBanano, tamañoBanano, precioInicial);
write('El precio final por kilo de banano entregado es:', precioFinal);
