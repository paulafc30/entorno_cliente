/** Ejercicio 6: Escribe una función iterativa que dado un número entero n, retorne un 
array con todos los números enteros en orden decreciente desde n a 1.*/

function arrayEnteros(numero) {
    let array_enteros = [];
    for (let i = numero; i >= 1; i--) { 
        array_enteros.push(i); 
    }
    return array_enteros; 
}

let numero = parseInt(prompt("Introduce un número entero: "));

console.log(arrayEnteros(numero));