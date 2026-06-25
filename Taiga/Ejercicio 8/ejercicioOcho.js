// Solicita al usuario un número y muestra su tabla de multiplicar del 1 al 10 utilizando un ciclo for. Ejemplo:

// ALGORITMO
// Datos de entrada:
//     Numero de tabla a multiplicar
// Proceso:
//     Calcular el numero ingresado por los numeros a multiplicar
// Salida:
//     Devolver el resultado

let numeroTabla = Number(prompt("Ingrese el numero de la tabla a calcular"));

for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabla * i;
    console.log(`${numeroTabla} x ${i} = ${resultado}`)
}