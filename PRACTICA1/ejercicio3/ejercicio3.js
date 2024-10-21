let numero;
do {
  numero = prompt("Introduce un numero entero positivo entre 5 y 10: ");
} while (numero < 5 || isNaN(numero) || numero > 10);

let array_numeros = [];
let random;

// Rellenar array
for (let i = 0; i < numero; i++) {
  random = Math.floor(Math.random() * 100 * numero);
  array_numeros.push(random);
}

// Calcular la media
let media = 0;
for (let i = 0; i < numero; i++) {
  media += array_numeros[i];
}
media = media / array_numeros.length;

function pintarArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(` ${array[i]} `);
  }
}

// Calcular si superan la media
let superanMedia = [];
for (let i = 0; i < array_numeros.length; i++) {
  if (array_numeros[i] > media) {
    superanMedia.push(array_numeros[i]);
  }
}

pintarArray(array_numeros);
console.log("La media es: " + media);
console.log("Los numeros que superan la media son: " + superanMedia);
