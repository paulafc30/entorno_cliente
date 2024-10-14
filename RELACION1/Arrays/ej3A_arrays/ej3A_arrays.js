/**Ejercicio 3: Crea un script que pida al usuario un numero entero positivo N mayor a 2. 
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir. 
A continuación, debe crearse una matriz NxN rellena con los resultados de la tabla de 
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en forma 
de matriz” Ej: Para el número 3, el programa debe mostrar 
03 06 09 
12 15 18 
21 24 27  */

let numero;


do {
    numero = parseInt(prompt("Introduce un número entero positivo mayor a 2: "));
} while (isNaN(numero) || numero <= 2);

let matriz = [];
for (let i = 1; i <= numero; i++) {
    let fila = [];
    for (let j = 1; j <= numero; j++) {
        fila.push(i * j * numero);
    }
    matriz.push(fila);
}

for (let i = 0; i < numero; i++) {
    if (matriz[i] < 10) {
        console.log("0" + matriz[i]);
    } else {
        console.log(matriz[i]);
    }
}
