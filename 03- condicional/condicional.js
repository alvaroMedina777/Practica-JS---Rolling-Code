/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
- Si ha comprado menos de 100 dolares no hay descuento
- Si la compra está entre 100 y 300 dolares le descuenta un 5%
- Si la compra está por encima de 300 hasta 500 dolares le descuenta un 10%
- Si la compra supera los 500 dolares le descuenta un 15%
*/

let dolar = 1555;
let compra = number(prompt("Cuantos dolares compró?"));

let resultado = dolar * compra;

if (compra < 100) {
    alert("No hay descuento, el total a pagar es: " + compra);
} else if (compra >= 100 && compra <= 300) {
    alert("Se le aplicará un descuento del 5%, el total a pagar es: " + ((resultado) * 0.95)); 
} else if (compra >= 300 && compra <= 500){
    alert("Se le aplicará un descuento del 10%, el total a pagar es: " + ((resultado) * 0.90));
} else {
    alert("Se le aplicará un descuento del 15%, el total a pagar es: " + ((resultado) * 0.85));
}

alert("El total a pagar es: " + resultado);