// Crear un script que simule el juego de Adivina el número. Primero se genera un número aleatorio entre 1 y 10 que el usuario no debe saber, Luego el usuario ingresa un número entre 1 y 10 tratando de adivinar. Devolver un mensaje si ganó o perdió.

// let numeroRandom = Math.random(1*10);

let numeroRandom = Math.floor(Math.random() * 10) + 1;
let adivinoNumero = Number(prompt("Ingrese un numero del 1 al 10"));

if (numeroRandom == adivinoNumero) {
    alert("Adivinaste el numero. Felicidades!!")
} else {
    alert("No adivinaste el numero. Mala suerte!!")
}