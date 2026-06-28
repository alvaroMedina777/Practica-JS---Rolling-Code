// 2. El "Triángulo de Asteriscos" (Ciclo for anidado)
// Consigna: Utiliza dos bucles for (uno dentro de otro) para imprimir un triángulo de asteriscos en la consola con una altura de 5 líneas:

// Desafío lógico: El bucle externo controla las filas y el interno controla cuántos asteriscos imprimir en cada fila. 

// Objetivo: Dominar la complejidad de los bucles anidados, fundamental para entender estructuras de datos complejas en el futuro

// ALGORITMO
// -DATOS DE ENTRADA

// -PROCESO 

// -DATOS DE SALIDA

// Triángulo de Asteriscos con altura de 5

let altura = 5;

for (let fila = 1; fila <= altura; fila++) {
    let linea = "";

    // Bucle interno: imprime tantos asteriscos como el número de la fila
    for (let col = 1; col <= fila; col++) {
        linea += "*";
    }

    console.log(linea);
}
