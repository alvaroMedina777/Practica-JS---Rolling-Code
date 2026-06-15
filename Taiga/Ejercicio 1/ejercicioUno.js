// 📝 Ejercicio 1: Comparar números enteros
// Solicita al usuario dos números enteros.  
// Convierte las entradas a números enteros.  
// Determina cuál de los dos números es mayor, o si son iguales.  
// Muestra el resultado en la consola. 


let nroUno = Number(prompt("Ingrese el primer numero"));
let nroDos = Number(prompt("Ingrese el segundo numero"));

if (nroUno > nroDos) {
    console.log("El numero mas grande es " + nroUno);
} else if ( nroUno < nroDos){
    console.log("El numero mas grande es " + nroDos);
} else {
    console.log("Ambos numeros son iguales");
}