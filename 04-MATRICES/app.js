// MATRIZ BASICA QUE FUNCIONA
let matriz1 = [];
n_filas = prompt("Introduce el numero de filas: ");
n_columnas = prompt("Introduce el numero de columnas: ");

for (i = 0; i < n_columnas; i++) {
  let filas = [];
  for (j = 0; j < n_filas; j++) {
    filas.push(prompt("Introduce un valor: "));
  }
  matriz1.push(filas);
  console.log(matriz1);
}

// Definir una matriz vacia
let matriz = [];

// Pedir por una ventana emergente
let num = prompt("Dime el tamaño de columna");

// Rellenar el array
for (let i = 0; i < num; i++) {
  matriz[i] = new Array(num);
}

// Función para pedir con opcion a ERROR
function recogerNum(msj) {
  let res = prompt(msj);
  while (isNaN(res)) {
    res = prompt("ERROR. Introduce un numero: ");
  }
  return res;
}

//NO FUNCIONA ESTE EJERCICIO
function CreaYPintaMatriz(fila, columna) {
  let matriz = new Array(fila);
  //inicializamos matriz
  for (let i = 0; i < fila; i++) {
    matriz[i] = new Array(columna);
  }
  //relleno de valores
  for (let i = 0; i < fila; i++) {
    for (let j = 0; j < columna; j++) {
      matriz[i][j] = j;
    }
    console.log(matriz[i]);
  }
}

//
let fila = recogerNum("dime tamaño de fila");
let columna = recogerNum("dime tamaño de columna");

// LLamar a la funcion
CreaYPintaMatriz(fila, columna);

//-----------------------------------------------------------------------

// Rellenar la matriz manualmente
matriz = [
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
];
console.log(matriz);

// Rellenar la matriz manualmente
autos = [["BMW1", "BMW2", "BMW3"], ["AUDI", "AUDI2"], ["CLIO"]];
console.log(autos);

// Concultar la cantidad de autos
console.log(autos.length);

// Mostrar que hay en cada cajón
console.log(autos[0].length);
console.log(autos[1].length);
console.log(autos[2].length);

// Función para recorrer y mostrar la matriz
function PintarMatriz(autos) {
  let resultado = "";

  for (let i = 0; i < autos.length; i++) {
    for (let j = 0; j < autos[i].length; j++) {
      resultado += autos[i][j] + " ";
    }
    console.log(resultado);
    resultado = "";
  }
}

// Llamada a la funcion
PintarMatriz(autos);

// Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1.
// En otras palabras, 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
console.log(getRandomInt(3));
// Salida: 0, 1 or 2
  
console.log(getRandomInt(1));
// Salids: 0
  
console.log(Math.random());
// Salida: un número de 0 a <1
// Generar número aleatorio entre mínimo y máximo sin incluir extremos
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos (números enteros)
function getRandomEnteros(min, max) {
    return Math.random() * (max - min + 1) + min;
}
// Generar número aleatorio entre mínimo y máximo incluyendo extremos
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
     // The maximum is inclusive and the minimum is inclusive
}
