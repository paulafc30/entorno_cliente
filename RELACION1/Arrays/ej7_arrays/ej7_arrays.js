/**Ejercicio 7: Quitar los elementos repetidos de un array.*/

var miArray = new Array();
miArray[0] = 200;
miArray[1] = 40;
miArray[2] = 400;
miArray[3] = 40;
miArray[4] = 40;

function QuitarDuplicados(miArray) {
    let noRepetidos = [];

    for (let i = 0; i < miArray.length; i++) {
        if (noRepetidos.indexOf(miArray[i]) === -1) { // No entiendo muy bien el indexOf
            noRepetidos.push(miArray[i]);
        }
    }

    return noRepetidos;
}

console.log(QuitarDuplicados(miArray));

