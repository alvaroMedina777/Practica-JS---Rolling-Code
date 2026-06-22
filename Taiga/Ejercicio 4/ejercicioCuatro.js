// Se necesita un script que solicite al usuario escribir una frase o texto y luego ingresar una palabra que quiera buscar. En cualquier caso (sea que encuentre la palabra o no) el programa debe devolver un mensaje informando el resultado (Usar emojis también).
// Usar los métodos aprendidos en la clase para encontrar la solución.

let mensaje = prompt("Ingrese un mensaje saludando!");
let palabra = prompt("Ingrese la palabra que desea buscar");

let mensajeMay = mensaje.toLowerCase();
let palabraMay = palabra.toLowerCase();

if (mensajeMay.includes(palabraMay)) {
    alert(`La palabra: ${palabraMay} fue encontrada en el mensaje anterior🥳`);
} else {
    alert(`La palabra no fue enocntrada en el mensaje anterior😔`)
}