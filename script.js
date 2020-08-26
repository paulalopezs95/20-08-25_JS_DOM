/* Método para mostrar mensajes */

function alertMessage() {
    alert("Hello, World!");

}

/* Prompt */

function box1(){
    var name= prompt('Name');
    document.write("<h1> Your name is " + name + "</h1>")
}

/* Confirm */

function confirm(){
    var resp = confirm("Are you sure?")

    if (resp == true) { /*boolean*/
        alert("Delete file");
    } else {
        alert("File not delete");
    }
}

/* Console */

function consola(){
    console.log('Your best friend');
}


/* Mouse */

var box= document.getElementById("box");


box.addEventListener("mouseenter",()=>{
    box.classList.replace("box","changes");
})



box.addEventListener("mouseleave",()=>{
    
    /* El primer parámetro es la clase existente
    o actual y el segundo parámetro es la que 
    se va a reemplazar */
    
    box.classList.replace("changes","box")
})

box.addEventListener("mousemove",()=>{ 
    console.log("Mouse Move");
    
})

box.addEventListener("mousedown",()=>{ 
    console.log("Click");
    
})

box.addEventListener("mouseup", ()=>{ 
    console.log("Has levantado el click dentro del div");
    
})

/* Keyboard */

var teclado= document.getElementById("teclado");

/* teclado.addEventListener("keydown"), ()=>{
    console.log("Has oprimido una tecla");
}


teclado.addEventListener("keypress"), ()=>{
    console.log("Tienes la tecla sostenida");
} */

teclado.addEventListener("keyup", (e)=>{
    console.log(e.key);
    var letra = e.key;
    var mLetra = letra.toLowerCase();

    if (mLetra === "w" ){
        console.log("Vas hacia adelante");
    }
    else{
        console.log("mayuscula");
    }
});


/*Object Event */

var padre= document.getElementById("padre");

padre.addEventListener("click", (e)=>{
    console.log(e.target.textContent)
    /*e.target.style.background="red"*/

    e.target.classList.add("color")
});

/* Crear elementos dentro de un nodo o etiqueta */

var lista= document.getElementById("lista");
var agregar= document.getElementById("agregar")

agregar.addEventListener("click", ()=>{
var texto= document.getElementById("texto").value;

/* Me trae el texto o información ingresado
dentro del input */

var etiqueta= document.createElement("li");
/* Se crea la etiqueta */

etiqueta.textContent= texto;
/*Dentro de la etiqueta inserto el texto que tiene el input*/


lista.appendChild(etiqueta)
/*Agregamos la etiqueta a la lista*/

});

