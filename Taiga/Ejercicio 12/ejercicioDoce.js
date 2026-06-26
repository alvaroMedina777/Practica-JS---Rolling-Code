// Utiliza un ciclo while para mostrar todos los números pares entre 2 y 20.

let contador = 1;
// let resultado = contador % 2;

while (contador <= 20) {
    if (contador % 2 === 0) {
        console.log(contador);
    }

    contador++;
}