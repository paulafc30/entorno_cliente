// DEFINICION DE FUNCIONES

let func = new Function("a", "b", "return a * b");
let resultado = func(10, 10);
console.log(resultado);

//mifuncion();

// FUNCIÓN AUTOINVOCADAS
(function () {
  let msg = "hola!";
  console.log(msg);
})();

// FUNCIÓN ANÓNIMA
resultado = function (a, b) {
  return a * b;
};
console.log(resultado(10, 10));

// Notación flecha --> arrow functions
const arrowF = (a, b) => a * b;
console.log(arrowF(10, 10));

