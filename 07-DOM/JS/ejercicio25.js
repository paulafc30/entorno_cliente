console.log("Estoy");

let boton1 = document.getElementById("btnAgregarAntes");
boton1.addEventListener("click", agregarAntes);

function agregarAntes() {
  let primerElem = document.getElementById("primerElemento");

  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
  primerElem.before(nuevoElem);
}

let boton2 = document.getElementById("btnAgregarDespues");
boton2.addEventListener("click", agregarDespues);

function agregarDespues() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea debajo del 1er elemento";
  primerElem.after(nuevoElem);
}

let boton3 = document.getElementById("btnAgregarAlInicio");
boton3.addEventListener("click", agregarAlInicio);

function agregarAlInicio() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea";
  primerElem.prepend(nuevoElem);
}

let boton4 = document.getElementById("btnAgregarAlFinal");
boton4.addEventListener("click", agregarAlFinal);

function agregarAlFinal() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea";
  primerElem.append(nuevoElem);
}

let boton5 = document.getElementById("btnReemplazarElementos");
boton5.addEventListener("click", reemplazarElementos);

function reemplazarElementos() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.replace("tarea","tarea1");
  nuevoElem.textContent = "New tarea";
  primerElem.replaceChildren(nuevoElem);
}

let boton6 = document.getElementById("btnReemplazarPrimerElemento");
boton6.addEventListener("click", reemplazarPrimerElemento);

function reemplazarPrimerElemento() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.replace("primerElemento", "Elemento");
  nuevoElem.textContent = "Reemplazo primer elemento";
  primerElem.replaceWith(nuevoElem);
}

let boton7 = document.getElementById("btnEliminarElemento");
boton7.addEventListener("click", eliminarElemento);

function eliminarElemento() {
  primerElem = document.getElementById("primerElemento");

  nuevoElem = document.createElement("li");
  nuevoElem.classList.remove("tarea");
  primerElem.remove(nuevoElem);
}
