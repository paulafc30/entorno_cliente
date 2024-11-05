
function pedirNumPositivo(mensaje) {
    let n = parseInt(prompt(mensaje));
    do {
        console.log(n);
        if (isNaN(n)) {
            alert("Error en el valor introducido");
        }
    } while (isNaN(n));
    return n;
}

function esMayor2(media, numero) {
    if (numero > media * 2) {
        return true;
    }
}
function esMayor(media, numero) {
    if (numero > media) {
        return true;
    }
}
function pideDato(cnt) {
    let incorrecto=true;
    let n;
    do {
        n = prompt("Introduzca numero " + cnt + " (o bien . para finalizar)");
        console.log(n);
        if (n !== '.'){
            if (isNaN(n)) {
                alert("Error en los datos, introduzca otro");
            }
            else{
                incorrecto= false;
            }
        }
        else{
            incorrecto=false;
        }
        
    } while (incorrecto);
    return n;
}
// ------------------------------------------------------------------
function ejercicio2() {
    let cnt = 0;
    let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0, n6 = 0, n7 = 0, n8 = 0, n9 = 0, n10 = 0;
    let total = 0;
    let input;
    let media=0;
    let mayores = "";
    let doble = "";
    let continuar = true;

    // Usamos un bucle para solicitar los 10 números o hasta que se introduzca un "."
    while (continuar) {
        input = pideDato(cnt+1);
        switch (true) {
            case (input === "."):
                // Interrumpir la solicitud si se introduce un punto "."
                continuar=false; // Rompe el bucle
                break;
            case (cnt == 0):
                n1 = Number(input);
                total += n1;
                cnt++;
                break;
            case (cnt == 1):
                n2 = Number(input);
                total += n2;
                cnt++;
                break;
            case (cnt == 2):
                n3 = Number(input);
                total += n3;
                cnt++;
                break;
            case (cnt == 3):
                n4 = Number(input);
                total += n4;
                cnt++;
                break;
            case (cnt == 4):
                n5 = Number(input);
                total += n5;
                cnt++;
                break;
            case (cnt == 5):
                n6 = Number(input);
                total += n6;
                cnt++;
                break;
            case (cnt == 6):
                n7 = Number(input);
                total += n7;
                cnt++;
                break;
            case (cnt == 7):
                n8 = Number(input);
                total += n8;
                cnt++;
                break;
            case (cnt == 8):
                n9 = Number(input);
                total += n9;
                cnt++;
                break;
            case (cnt == 9):
                n10 = Number(input);
                total += n10;              
                cnt++;
                continuar=false; // Rompe el bucle
                break;
        }
    }
    if (cnt>0){
        media = total / cnt;
        imprime(media, n1);
        imprime(media, n2);
        imprime(media, n3);
        imprime(media, n4);
        imprime(media, n5);
        imprime(media, n6);
        imprime(media, n7);
        imprime(media, n8);
        imprime(media, n9);
        imprime(media, n10);
    }
    function imprime(media, n) {
        if (n>0){
            if (esMayor(media, n)) {
                if (esMayor2(media, n)) {
                    doble += n + ", ";
                    mayores += n + ", ";
                } else {
                    mayores += n + ", ";
                }
            }
        } 
    }
    alert("La media es: " + media + " --- Numeros mayores que la media: " + mayores + "--- Doble que la media: " + doble);      
}

function recogerNum(mensaje) {
    let n = Number(prompt(mensaje));
    do {
        console.log(n);
        if (isNaN(n)) {
            alert("Error en el valor introducido");
        }
    } while (isNaN(n));

    return n;
}

// ------------------------------------------------------------------
function ejercicio4() {
    let n;
    do {
        n = Number(recogerNum("Dime un numero: "));
        console.log(n);
        if ((n < 2) || (n > 5) || isNaN(n)) {
            alert("Error en los datos");
        }
    } while ((n < 2) || (n > 5) || isNaN(n));
    
    let matriz = [];
    let suma = 0;
    let media;
    
    console.log("La matriz generada con números aleatorios es:");
    // utilizo f para fila y c para columna
    for (let f = 0; f < n; f++) {
        matriz[f] = new Array(n);
        let fila = "";
        for (let c = 0; c < n; c++) {
            matriz[f][c] = parseInt(Math.random() * 99 + 1);
            suma += matriz[f][c];
            if (matriz[f][c] < 10) {
                fila += "0";
            }
            fila += matriz[f][c] + " "
        }
        console.log(fila);
    }
    media = parseFloat(suma / (n * n))
    console.log("La media es = " + media);

    let resultado = [[], []];

    for (let f = 0; f < n; f++) {
        for (let c = 0; c < n; c++) {
            if (matriz[f][c] >= media) {
                resultado[0].push(matriz[f][c]);
            } else {
                resultado[1].push(matriz[f][c]);
            }
        }
    }
    console.log("La matriz resultado es:");
    pintaMatriz(resultado);

    let ordena;
    do {
        ordena = Number(recogerNum("Pulse 0 para ordenar ASC o 1 DESC: "));
        if ((ordena > 1) || (ordena < 0) || isNaN(ordena)) {
            alert("Error en los datos");
        }
    } while ((ordena > 1) || (ordena < 0) || isNaN(ordena));

    if (ordena == 1) {
        resultado[0].sort(function(a, b){return a - b});
        resultado[1].sort(function(a, b){return a - b});
        resultado[0].reverse();
        resultado[1].reverse();
    } else {
        resultado[0].sort(function(a, b){return a - b});
        resultado[1].sort(function(a, b){return a - b});
    }
    console.log(resultado);
    console.log("La matriz resultado ordenada es:");
    pintaMatriz(resultado);
    
}

function pintaMatriz(matriz){
    for (let i = 0; i < matriz.length; i++) {
        let fila = "";
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 10) {
                fila += "0";
            }
            fila += matriz[i][j] + " "
        }
        console.log(fila);
    }
}





