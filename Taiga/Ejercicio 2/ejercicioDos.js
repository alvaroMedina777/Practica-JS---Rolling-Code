// 📝 Ejercicio 2: Calcular promedio de notas
// Pide al usuario tres notas con decimales.  
// Convierte las entradas a números decimales.
// Calcula el promedio de las tres notas usando operadores aritméticos.  
// Muestra el promedio en la consola.  
// Usa un condicional para indicar si el promedio es suficiente para aprobar (ejemplo: mayor o igual a 6).

let nroUno = parseFloat(prompt("Ingres el primer numero decimal"));
let nroDos = parseFloat(prompt("Ingrese el segundo numero decimal"));
let nroTres = parseFloat(prompt("Ingrese el tercer numero decimal"));

let promedio;

console.log(`La suma de los numeros nos da: ${promedio = (nroUno + nroDos + nroTres) / 3}`)
// console.log("Con la suma de los 3 numeros, el promedio es: " + promedio);

if (promedio >= 6) {
    console.log(`Obtuvo un promedio de ${promedio}, está aprobado. Felicidades!!`)
} else {
    console.log(`Obtuvo un promedio de ${promedio}, esta desaprobado. Que lastima!`)
}