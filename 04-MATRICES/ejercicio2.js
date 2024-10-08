/**EJERCICIO 2: Hacer una matriz de numeros random de 0 a 100 incluyendo extremos*/
let matriz = [];
n_filas = prompt("Introduce el numero de filas: ");
n_columnas = prompt("Introduce el numero de columnas: ");
let max = 100;
let min = 0;

for (i = 0; i < n_columnas; i++) {
  let filas = [];
  for (j = 0; j < n_filas; j++) {
    filas.push(Math.random() * (max - min + 1) + min);
  }
  matriz1.push(filas);
  console.log(matriz1);
}