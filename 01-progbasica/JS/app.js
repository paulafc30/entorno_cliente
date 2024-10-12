//alert("hola mundo");
//'use strict';

console.log("Paula");

//nombre= "Jose Miguel"
console.log(nombre);
//alert(nombre)
console.log(nombre);

// DECLARAR VARIABLES
var nombre;
let a = 3;
let b = "2";
let c = a + b;

// MOSTRAR POR PANTALLA
console.log(c);
console.log(typeof a);
console.log(typeof b);
let ok = true;
console.log(typeof ok);
console.log(a + nombre);
nombre = "Jose Miguel";
console.log(a + nombre);

// IF
if (b > a) {
  console.log("");
} else {
  console.log("");
}

// DEFINIR OBJETOS CON SYMBOL
let objeto1 = Symbol(1); //Symbol es para definir un objeto
console.log(typeof objeto1);
console.log(objeto1);

let objeto2 = Symbol(2);
console.log(typeof objeto2);
console.log(objeto2);

let horaDia = 5;
let mensaje = "";

/*
    6 - 11:59 BDias
    12 - 18 BTardes
    18 - 23: 59 BNoches
*/

// IF ELSE IF
if (horaDia < 12 && horaDia >= 6) {
  console.log("Buenos Dias");
} else if (horaDia >= 12 && horaDia < 18) {
  console.log("Buenas tardes");
} else if ((horaDia >= 18 && horaDia <= 23) || (horaDia >= 0 && horaDia < 0)) {
  console.log("Buenas noches");
} else {
  console.log("Esa hora no existe");
}

console.log(". Actualmente son las " + horaDia);

let z = 2;
let y = "2";

// OPERADORES DE IGUALDAD
if (z == y) {
  console.log("son iguales");
}

if (z === y) {
  console.log("son iguales");
} else {
  console.log("no son iguales");
}

/*OPERADOR TERNARIO
El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
Se usa para tomar una decision basada en una expresion que se evalua como true o false.
Es una forma abreviada de la sentencia if else que crea código más limpio, facil de entender 
y rapido de escribir */

let resultado = z == y ? "Verdadero" : "Falso";
console.log(resultado);

//CASTEOS
let miNumero = "18";
console.log(miNumero);

// SI NO ES UN NUMERO(isNaN)
if (isNaN(miNumero)) {
  //isNaN --> is No a Number
  console.log("no es un numero");
}

// CASTEO A NUMERO
miNumero = Number(miNumero);
console.log(miNumero);

// CASTEO A STRING
let miString = String(miNumero);
console.log(miString);

//WHILE
let contador = 0;
while (contador < 3) {
  console.log(contador);
  contador++;
}

//DO WHILE
let cont = 0;
do {
  console.log(cont++);
} while (cont < 4);

//FOR
for (let conta = 0; conta < 5; conta++) {
  console.log(conta);
}

//SWITCH
let mes = 1;
let estacion = "desconocida";

switch (mes) {
  case 1:
  case 2:
  case 12:
    estacion = "Invierno";
    break;
  case 9:
  case 10:
  case 11:
    estacion = "Otoño";
    break;
  case 3:
  case 4:
  case 5:
    estacion = "Primavera";
    break;
  case 6:
  case 7:
  case 8:
    estacion = "Verano";
    break;
  default:
    estacion = "No existe ese mes";
}
console.log(estacion);

// USO DE BREAK EN FOR
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 3; j++) {
    console.log("c1: " + i + " c2: " + j);
    continue;
    if (j == 2) {
      //break;
      j = 4;
      i = 3;
    }
  }
}

// CREAR OBJETO
const objeto3 = {
  nombre: "Jose Miguel", //clave
  apellido: "Cabezuelo", //valor
  edad: 47,
};
console.log(typeof objeto3);

// CREAR ARRAY
let marcaCoches = ["BMW", "Audi", "Renault", "Ford"];
console.log(typeof marcaCoches);

console.log(marcaCoches);

// RECORRER ARRAY
for (i = 0; i < marcaCoches.length; i++) {
  console.log(marcaCoches[i]);
}

// DEFINIR UNA CLASE
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  toString() {
    return `${this.nombre} 
    ${this.apellido}, 
    edad: ${this.edad}`;
  }
}

console.log(Persona);
console.log(typeof Persona);

// Probar la clase Persona
let persona1 = new Persona("Juan", "Pérez", 23);
console.log(persona1.toString());
console.log(persona1);
console.log(nombre);

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad);
console.log(persona2.toString());

// FUNCIONES
var aa = 4;
var bb = 5;

function miFuncion(xx, yy) {
  let aa = 7;
  let bb = 10;
  console.log("Suma: " + (xx + yy));
  console.log("Suma: " + (aa + bb));
  console.log("Suma: " + `${aa + bb}.Más texto`);
  return xx + yy;
}

let result = miFuncion(7, 8);
console.log(result);

console.log(typeof miFuncion);

