/** Ejercicio 4: Dado un vector de enteros, introducir un nuevo elemento en la posición 
seleccionada que debe solicitarse al usuario (mediante splice).
Nota: los valores de cada vector se solicitarán separados por “,” */

let vector = [1, 2, 3, 4, 5, 6, 7, 8];

function recogerNumero() {
    posicion = parseInt(prompt("Posicion del elemento: "));
    return posicion;
}

vector.splice(recogerNumero(), 0, "coche");
console.log(vector);

