// CREAR ARRAYS
let autos = ["BMW", "Audi", "Volvo"];

console.log(autos);
console.log(typeof autos);

// CREAR ARRAYS CON NEW
let item = new Array(1, 6);
console.log(item);
let items = new Array(6);
console.log(items);

// CONTAR ELEMENTOS DEL ARRAY
//let pets = new Array('perro','gato','periquito');
let pets = ["perro", "gato", "periquito"];
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

// ITERAR EL ARRAY
let len = pets.length;
for (i = 0; i < len; i++) {
  console.log(pets[i]);
}

// AÑADIR NUEVOS ELEMENTOS AL ARRAY
pets.push("rana", "toro");
pets.push("loro");
console.log(pets);
pets[2] = "leon";
pets[8] = "zebra";
pets.push("loro");
console.log(pets);

// AÑADIR ELEMENTOS EN UNA POSICION CONCRETA
items[2] = "toro";
console.log(items);

// SACA Y ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
console.log(pets.pop());
console.log(pets.pop());
console.log(pets);

// SACA Y ELIMINA EL PRIMER ELEMENTO DEL ARRAY
console.log(pets.shift());
console.log(pets);

// AÑADIR Y REMPLAZAR CON SPLICE()
const months = ["Jan", "Feb", "March", "April", "June"];
months.splice(1, 1, "Feb"); // Param2: 0 añade en medio 1 reemplaza 2 o más borra esa cantidad de elementos y reemplaza
console.log(months);
months.splice(1, 0, "May"); // Param1: va la posicion
console.log(months);
months.splice(5, 0, "July", "August", "Sept");
console.log(months);

// PARTIR LA CADENA EN 2 CON SPLICE()
let eliminados = months.splice(4);

console.log(eliminados);
console.log(months);

// ORDENACIÓN DE ARRAYS
console.log(months.reverse()); //Ordena al revés
console.log(months.sort()); //Ordena alfanumerica

// Partes de una palabra, frase, vectores, ... delimitados por un separador
let cadena = 'JavaScript es un lenguaje de programación';
let vector = '12,34,45,6,7,9';

console.log(cadena.replace('Java','ECMA'));

let palabras = cadena.split('.');
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

// búsqueda de una posición
let posicion = months.indexOf('Jan');
console.log(posicion);

months.push('Apr');
months.push('Jun');

// Slice
console.log(months.slice(2,4));
console.log(months);

// Unschift. Añade un nuevo elemento al principio
pets.unshift('Perro');
console.log(pets);
