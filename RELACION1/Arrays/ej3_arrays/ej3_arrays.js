/**Ejercicio 3: Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2,
B2, ..., An, Bn. Los vectores pueden tener longitud distinta (requiere controlarlo).
Nota: los valores de cada vector se solicitarán separados por “,” */


function recoger_Numero() {
  let pregunta1 = prompt("Introduce enteros separados por comas: ");
  let pregunta2 = prompt("Introduce letras separadas por comas: ");
  let contenido1 = pregunta1.split(",");
  let contenido2 = pregunta2.split(",");
  return [contenido1, contenido2];
}

function concatenar(contenido1, contenido2) {
  let array_final = [];
  let longitud;

  if (contenido1.length < contenido2.length) {
    longitud = contenido2.length;
  } else if (contenido2.length < contenido1.length) {
    longitud = contenido1.length;
  } else {
    longitud = contenido1.length;
  }

  for (let i = 0; i < longitud; i++) {
    if (i < contenido1.length) {
      array_final.push(contenido1[i]);
    }
    if (i < contenido2.length) {
      array_final.push(contenido2[i]);
    }
  }
  return array_final;

}

let [array1, array2] = recoger_Numero(); 
let resultado = concatenar(array1, array2);
console.log(resultado);


// CON OPERADOR TERNARIO
