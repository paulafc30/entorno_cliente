function inicioDOM(){
    console.log("Dom cargado");
 
    document.body.style.background = 'cyan';
 
    //document.getElementById
    let titulo = document.getElementById("title");
    //objeto en si
    console.log(titulo);
 
    //contenido de la etiqueta 
    console.log(titulo.innerHTML);
    console.log(titulo.textContent);
 
    //tamaño del contenido de la etiqueta
    console.log(titulo.textContent.length);
 
    //getElementsByName
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);
 
    //getElementsByTagName
    let parrafos = document.getElementsByTagName("p"); //se pone entre () el tipo de etiqueta
    console.log(parrafos);
    console.log(`Numero de parrafos que tengo: ${parrafos.length}`);
 
    //recorrer y mostrar los parrafos
    for(let i =0; i <parrafos.length; i++){
       if(i == 3){
          parrafos[i].innerHTML = "Parrafo Cambiado";
       }
       console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`);
 
    }
    console.log("-----------------------------");
    //Document.getElementByClassName()
    parrafos = document.getElementsByClassName("parrafo1");
    console.log(parrafos)
    console.log(`Numero de parrafos que tengo: ${parrafos.length}`);
    for(let i = 0; i <parrafos.length; i++){
       if(i == 3){
          parrafos[i].innerHTML = "Parrafo Cambiado";
       }
       console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`);
    }
 
    console.log("-----------------------------");
    //querySelector() nos devuelve la primera ocurrencia = que el elemento del ElementById
    let parrafo1 = document.querySelector("p.parrafo1");
    console.log(parrafo1);
    let titulos = document.getElementById("parrafo1");
    console.log(titulos);
 
    parrafo1 = document.querySelector(".projects p");
    console.log(parrafo1);
 
    parrafo1 = document.querySelector("projects");
 
    //querySelectorAll() array vacio si no encuentro nada array con cosas si si
    let elementos = document.querySelectorAll("p.parrafo1");
    for(let i = 0; i <parrafos.length; i++){
       console.log(`Elemento ${i+1}: ${parrafos[i].innerHTML}`);
    }
    
    //Selecciono el DOM parcialmente
    let sectionProjects = document.getElementById('proyectos');
 
    console.log(sectionProjects);
    elementos = sectionProjects.querySelectorAll('p.parrafos1'); 
    console.log(`Número de elementos que tengo: ${elementos.length}`);
    for (let i=0; i<elementos.length; i++){
       console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }
          
 }
 
 let estado = false;
 function color_cabecera(cabecera){
    // OPCION 1
    // if(estado){
    //    cabecera.style.color = 'red';
    //    estado = false;
    // }else{
    //    cabecera.style.color = 'black';
    //    estado = true;
    // }
 
    // OPCION 2 
    cabecera.style.color = (cabecera.style.color === 'red') ? 'black' : 'red';
 }
 
 
 //Vamos a modificar el titulo 2 
 function color_subtitulo(cabecera){
    cabecera.style.color = (cabecera.style.color === 'pink') ? 'pink' : 'orange';
 
 }
 
 function color_subtitulo2(){
    let elemento = document.getElementById('subtitle');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
 
 }
 
 let elemento = document.getElementById('subtitle');
 elemento.style.color = 'orange';
 document.getElementById('subtitle').onclick = color_subtitulo2;
 
 //opcion 1 llamada a eventos desde JS
 // elemento.onclick = color_subtitulo(elemento);

 let titleh3 = document.getElementById('H3title');
 titleh3.addEventListener('click', cambioSubtitulo3());

elemento = document.getElementById('H3title');
elemento.style.color = 'blue';

 function color_subtitulo3(){
    let elemento = document.getElementById('H3title');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
    
 }