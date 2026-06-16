// 📝 Ejercicio 3: Calculadora básica
// Solicita al usuario dos números decimales.  
// Convierte las entradas. 
// Pide al usuario que ingrese el tipo de operación: suma, resta, multiplicación o división.  
// Usa condicionales para ejecutar la operación correspondiente.  
// Muestra el resultado en la consola.  
// Si la operación no es válida, informa al usuario con un mensaje en la consola.


let primerNro = parseFloat(prompt("Ingrese el primer numero decimal"));
let segundoNro = parseFloat(prompt("Ingrese el segundo numero decimal"));

let operador = parseInt(prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division"));

if (operador == 1) {
    let resultado = parseFloat(primerNro + segundoNro);
    console.log(`El resultado de la suma es: ${resultado}`);
} else if (operador == 2) {
    let resultado = parseFloat(primerNro - segundoNro);
    console.log(`El resultado de la resta es: ${resultado}`);
} else if (operador == 3) {
    let resultado = parseFloat(primerNro * segundoNro);
    console.log(`El resultado de la multiplicacion es: ${resultado}`)
} else if (operador == 4) {
    let resultado = parseFloat(primerNro / segundoNro);
    console.log(`El resultado de la division es: ${resultado}`);
} else {
    console.log("Ingresó de manera incorrecta");
}