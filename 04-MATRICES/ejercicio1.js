/**EJERCICIO 1: Solicito numero de filas y columnas. Solicito un valor numerico por fila.
 * Que se multipliquen x2. Poner 2 digitos = 02,03.., */

function creaMatriz(num_filas, num_columnas) {
  let matriz = new Array(num_filas);
  let valor_inicial_fila = 0;

  // inicializo Matriz
  for (i = 0; i < num_filas; i++) {
    matriz[i] = new Array(num_columnas);
  }
  for (i = 0; i < num_filas; i++) {
    valor_inicial_fila = prompt("Introduce un valor: ");
    for (j = 0; j < num_columnas; j++) {
      matriz[i][j] = valor_inicial_fila * (j + 1);
    }
  }
  pintaMatriz(matriz);
}
function pintaMatriz(matriz) {
  let resultado = "";
  for (i = 0; i < num_filas; i++) {
    for (j = 0; j < num_columnas; j++) {
      if (matriz[i][j] < 10) {
        resultado += "0" + matriz[i][j] + " ";
      } else {
        resultado += matriz[i][j] + " ";
      }
    }
    console.log(resultado);
    resultado = "";
  }
}

// MI MANERA
// function creaMatriz(num_filas, num_columnas){

//     let matriz = new Array(num_filas);

//     // inicializo Matriz
//     for (i = 0; i < num_filas; i++){
//         matriz[i] = new Array(num_columnas);
//     }

//     for (i = 0; i < num_columnas; i++) {
//         let filas = [];
//         for (j = 0; j < num_filas; j++) {
//           if (filas[i] < 10 && filas[i] > 0) {
//             filas.push(prompt("Introduce un valor: ") * 2);
//             filas[i].push("0" + filas[i]);
//           } else {
//             filas.push(prompt("Introduce un valor: ") * 2);
//           }
//         }
//         matriz.push(filas);
//         console.log(matriz);
//       }

// }

num_filas = recogerNum("Introduce el numero de filas: ");
num_columnas = recogerNum("Introduce el numero de columnas: ");

function recogerNum(msj) {
  let res = prompt(msj);
  while (isNaN(res)) {
    res = prompt("ERROR. Introduce un numero: ");
  }
  return res;
}

creaMatriz(num_filas, num_columnas);
