function creaMatriz(num_filas, num_columnas) {
  let matriz = new Array(num_filas);

  // inicializo Matriz
  for (i = 0; i < num_filas; i++) {
    matriz[i] = new Array(num_columnas);
  }
  for (i = 0; i < num_filas; i++) {
    for (j = 0; j < num_columnas; j++) {
      matriz[i][j] = Math.floor(Math.random() * (99 - 1 + 1 - 1));
    }
  }
  pintaMatriz(matriz);
  return matriz;
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

let num_filas;
do {
  num_filas = Number(prompt("Introduce un numero entre 2 - 5: "));
} while (num_filas < 2 || num_filas > 5 || isNaN(num_filas));

let num_columnas = num_filas;

// C. Calcular la media
let media = 0;

// B. Muestra por consola el contenido de la matriz
let matriz = creaMatriz(num_filas, num_columnas);
for (i = 0; i < num_filas; i++) {
  for (j = 0; j < num_columnas; j++) {
    media += matriz[i][j];
  }
}
media = media / (num_columnas * num_filas);
console.log("La media es: " + media);

// D.
let array_resultado = [[]][[]];
array_resultado = creaMatriz(2, 2);

for (i = 0; i < num_filas; i++) {
  for (j = 0; j < num_columnas; j++) {
    if (array_resultado[i][j] > media) {
        array_resultado.push(array_resultado[i][j]);
    } else {
        array_resultado.push(array_resultado[i][j]);
    }
  }
  console.log(resultado);
  resultado = "";
}
pintaMatriz(array_resultado);

// E.
let opcion = Number(
  prompt("Introduce 0 para ordenar ASCENDENTE y 1 para DESCENDENTE")
);

switch (opcion) {
  case 0:
    array_resultado.sort(function (a, b) {
      return a - b;
    });
    console.log(array_resultado);
    break;

  case 1:
    array_resultado.reverse();
    console.log(array_resultado);
    break;
}
