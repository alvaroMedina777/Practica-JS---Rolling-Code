// 3. El Simulador de "Token de Seguridad" (Ciclo while)
// Contexto: Hoy en día, los sistemas de seguridad nos piden ingresar un código que caduca en segundos o nos limita la cantidad de intentos.

// Consigna: Crea un programa que simule un sistema de autenticación de 2 pasos. El sistema tiene un código fijo (ej: 5555). El usuario tiene un máximo de 3 intentos para ingresarlo correctamente.

// Desafío lógico: Usa un contador que aumente con cada intento fallido y un while que verifique dos condiciones: que el código sea incorrecto y que los intentos sean menores a 3.

// ALGORITMO 
// - DATOS DE ENTRADA
//     Ingresar codigo
// - PROCESO
//     Comparar el codigo ingresado con el codigo fijo
// - DATOS DE SALIDA
//     Mensaje de acceso concedido

const codigo = 8756;
let intentos = 0;

