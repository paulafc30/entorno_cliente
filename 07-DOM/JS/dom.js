function inicioDOM(){
    console.log("DOM cargado");

    document.body.style.background = 'red'; //ya tiene nuestro DOM

    //document.getElementById
    let titulo = document.getElementById("title");
    console.log(titulo); // Objeto
    console.log(titulo.innerHTML); // Contenido del objeto
    console.log(titulo.textContent); // Contenido del objeto
    console.log(titulo.textContent.length); // Tamaño del contenido del objeto
    
}