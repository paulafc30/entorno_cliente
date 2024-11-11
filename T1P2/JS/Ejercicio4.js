let btnNuevaTabla = document.getElementById("btnGenerarTabla");
btnNuevaTabla.addEventListener("click", crearTabla);

let fotos = [
  "./img/foto1.jpg",
  "./img/foto2.jpg",
  "./img/foto3.jpg",
  "./img/foto4.jpg",
  "./img/foto5.jpg",
];

function crearTabla() {
  let tam = parseInt(prompt("Dime el tamaño de la nueva tabla a crear"));
  let seccionTabla = document.getElementById("seccionTabla");

  let nuevaTabla = document.createElement("table");
  nuevaTabla.classList.add("miTabla");
  nuevaTabla.id = "miTabla";
  let tablaBody = document.createElement("tbody");

  nuevaTabla.setAttribute("border", 1);
  nuevaTabla.style.width = "300px";
  nuevaTabla.style.height = "300px";

  for (let i = 0; i < tam; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < tam; j++) {
      let celda = document.createElement("td");

      celda.style.width = "300px";
      celda.style.height = "300px";

      let imagen = document.createElement("img");
      celda.append(imagen);

      celda.onclick = function () {
        for (i = 0; i < fotos.length; i++) {
            imagen.setAttribute("src", fotos[i]);
          }
      };
      fila.appendChild(celda);
    }
    tablaBody.appendChild(fila);
  }
  nuevaTabla.appendChild(tablaBody);
  seccionTabla.appendChild(nuevaTabla);
}


