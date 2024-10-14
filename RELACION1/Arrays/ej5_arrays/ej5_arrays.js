/** Ejercicio 5: Solicitar al usuario una frase y generar un array con la función split(). 
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra, 
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la a la 
z y las palabras ordenadas de la z a la a. Sacar toda esta información en una ventana nueva.
1. Mostar por consola. 
2. Mostrar en la página html */

function iniciar() {
    let frase = prompt("Introduce una frase: ");


    let informacion = frase.split(" ");

    console.log("Numero de palabras: " + informacion.length);
    console.log("Primera palabra: " + informacion[0]);
    console.log("Ultima palabra: " + informacion[informacion.length - 1]);
    console.log("Orden inverso: " + informacion.reverse());
    console.log("DE A A LA Z: " + informacion.sort());

    //let ordenado = informacion.sort();
    console.log("DE Z A LA A: " + ordenado.sort().reverse());

    let imprimir = `
        <p>Numero de palabras:  ${informacion.length}</p>
        <p>Primera palabra:  ${informacion[0]}</p>
        <p>Ultima palabra: ${informacion[informacion.length - 1]}</p>
        <p>Orden inverso: ${informacion.reverse()}</p>
        <p>DE A A LA Z:  ${informacion.sort()}</p>
        <p>DE Z A LA A:  ${ordenado.reverse()}</p>
    `;


    let nuevaVentana = window.open("", "Resultados", "width=400,height=400");
    nuevaVentana.document.write(`<html><head><title>Resultados</title></head><body>${imprimir}</body></html>`);
    nuevaVentana.document.close();

}
