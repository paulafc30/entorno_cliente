function ConvertirMonedas(opcion) {
  let cantidad = prompt("Introduce la cantidad de monedas: ");
  let resultado;

  if (opcion == 1) {
    resultado = cantidad * 166;
    return alert(cantidad + " euros son " + resultado + " pesetas");
  } else {
    resultado = cantidad * 1.09;
    return alert(cantidad + " euros son " + resultado + " dolares");
  }
}

function ElegirOpcion() {
  let opcion;
  do {
    opcion = Number(
      prompt("Introduce 1 para convertir a pesetas, 2 para dolares: ")
    );
  } while (opcion > 2 || opcion < 0 || isNaN(opcion));

  return opcion;
}


ConvertirMonedas(ElegirOpcion());
