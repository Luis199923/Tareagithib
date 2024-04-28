//7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
//analisis de requerimiento
//ENT: temperaturaCelsius, temperaturaFahrenheit como Rea
//PRO:temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32
//SAL:"La temperatura en grados Fahrenheit es: ", temperaturaFahrenheit
//Algoritmo
//Algoritmo ConvertirTemperatura
    //Definir temperaturaCelsius, temperaturaFahrenheit como Real

    //Escribir "Ingrese la temperatura en grados Celsius: "
    //Leer temperaturaCelsius

    //temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32

    // Mostrar la temperatura en grados Fahrenheit
    //Escribir "La temperatura en grados Fahrenheit es: ", temperaturaFahrenheit
//FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log
// se crea la funcion
function unir(){
    gradosSelsius = ("ingrese gradosSelsius")
    gradosSelsius = read(gradosSelsius)
    gradosFahrenheit =read(gradosSelsius /5 * celsius + 32)
    write(gradosSelsius)
}
unir()