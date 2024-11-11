//https://www.marca.es

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregar);

let btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", borrar);

function agregar() {
  let elemento = prompt("Introduce el nombre del elemento: ");
  let enlace = prompt("Introduce la URL: ");
  let listaDinamica = document.getElementById("listaDinamica");
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("nuevo");
  let url = document.createElement("a");
  url.href = enlace;
  url.innerHTML = elemento;
  nuevoElem.append(url);
  listaDinamica.append(nuevoElem);
}

function borrar() {
  listaDinamica.remove();
}
