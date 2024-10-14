/**Ejercicio 1: Crea una función que reciba un array de valores enteros (positivos y 
negativos), y devuelva otro array con la suma parcial de cada elemento del array que se 
pasa como parámetro. Nota: La suma parcial de un elemento del array será la suma de ese 
elemento y todos los anteriores a él.  
Ej: Para el array [1,2,3,4,5,6], el array resultante será [1,3,6,10,15,21] */

//-------FALLA

function suma_parcial(valores) {
    let suma = 0;
    for (let i = valores.length; i > 0; i--) {
        suma = suma.push();
    }
    return suma;
}

function suma_parcial(valores) {
    let suma = 0;
    let resultado = []; 
    for (let i = 0; i < valores.length; i++) {
        suma += parseInt(valores[i]); 
        resultado.push(suma); 
    }
    return resultado;
}

function recogerNumero() {
    numeros = prompt("Introduce varios numeros enteros separados por comas: ");
    let valores = numeros.split(",");
    return valores;
}

console.log(suma_parcial(recogerNumero()));
