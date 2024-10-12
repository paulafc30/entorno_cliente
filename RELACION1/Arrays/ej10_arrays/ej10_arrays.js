/**Crea un script que filtre una lista de nombres y devuelva otra lista solo con
los que son amigos tuyos.
Como eres una persona muy “especial”, tú solo eres amigo/a de aquellas personas cuyo
nombre se componga exactamente de 4 letras.
Ejemplo:
Entrada={Luis", "Estela", "Ángel", "Enya", "Jose Antonio"}
Salida = {"Luis", "Enya"}
Entrada = {"Joaquín", "Manuel", "Carlos"}
Salida = {}
Suponemos que los array son correctos y tienen nombres.
Importante: hay que respetar el orden de los nombres en la salida */

// Lista de nombres de ejemplo
const nombres = [
  "Juan",
  "Ana",
  "Sara",
  "David",
  "Pablo",
  "Luz",
  "Mark",
  "Irene",
  "Nina",
  "Alba",
];
//"Aurora,Nico,Paula"

function filtrarAmigos(nombre) {
  let amigos = [];
  for (let i = 0; i < nombre.length; i++) {
    if (nombre[i].length == 4) {
      amigos.push(nombre[i]);
    }
  }
  return amigos;
}

function recoger_nombre(){
    let pregunta = prompt("Introduce una cadena separada por comas: ");
    let nombre = pregunta.split(',');
    return nombre;
}

// Lo que entra por el prompt
console.log(filtrarAmigos(nombres));

// En base al array que viene
console.log(filtrarAmigos(recoger_nombre()));
//document.write(amigos);

