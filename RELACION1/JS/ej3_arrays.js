/**Ejercicio 3: Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2,
B2, ..., An, Bn. Los vectores pueden tener longitud distinta (requiere controlarlo).
Nota: los valores de cada vector se solicitarán separados por “,” */

// function recoger_contenido() {
//   let pregunta = prompt("Introduce enteros separados por comas: ");
//   let contenido = pregunta.split(",");
//   return contenido;
// }

let pregunta1 = prompt("Introduce enteros separados por comas: ");
let pregunta2 = prompt("Introduce enteros separados por comas: ");
let contenido1 = pregunta1.split(",");
let contenido2 = pregunta2.split(",");

function concatenar(array1, array2) {
  let longitud;

  if (contenido1 < contenido2) {
    longitud = contenido1;
  }
  if (contenido2 < contenido1) {
    longitud = contenido1;
  }

  for (let i = 0; i < longitud; i++) {
    if (i < contenido1) {
    }
    if (i < contenido2) {
    }
  }
}

// SUSTITUIRLO POR LA CAPTURA DEL PROFESOR
