/*Ejercicio 16: */

function CrearRestaurante() {
    // El programa comienza pidiendo el número de mesas que tiene el restaurante. 
    let n_mesas = prompt("Cuantas mesas hay en el restaurante?");
    let array_mesas = [];

    // Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 
    for (let i = 0; i < n_mesas; i++) {
        array_mesas.push(Math.floor(Math.random() * (5)));
    }

    // mostrará por pantalla como quedan las mesas inicialmente. 
    console.log("Estado de las mesas: " + array_mesas);

    return array_mesas;
}


function numeroComensales() {
    let n_personas;
    do {
        n_personas = parseInt(prompt("Mesa para cuantos?"));
    } while (isNaN(n_personas));

    return n_personas;
}


// Buscar en que mesa hay hueco y si lo hay
function buscarMesa(n_personas, array_mesas) {
    let restaurante_lleno = true;
    let mesa_libre = -1;

    for (let i = 0; i < array_mesas.length; i++) {
        if (array_mesas[i] + n_personas <= 4) {
            array_mesas[i] += n_personas;
            restaurante_lleno = false;
            break;
        }
    }

    if (restaurante_lleno = false) {
        return console.log("Por favor, Siéntese en la mesa " + mesa_libre);
    } else {
        return console.log("Lo siento, no queda sitio en el restaurante");
    }

}

let hamburguesa = CrearRestaurante();
let num;
do {
    num = Number(numeroComensales());
    if (num > 0 || num < 4) {
        buscarMesa(num, hamburguesa);
    }

} while (num > 0);


