"use strict"

//usarla cuando se quiera agregar un estilo que no se pueda hacer con css
//mq = media quary
const mq = matchMedia("(max-width: 499px)")//se tiene que agregar algo entre los parentesis, en caso contrario lanzaria un error
const box = document.querySelector(".box")

console.log(mq)//muestra el protocolo de matchMedia
console.log(matchMedia("(max-width: 500px)"))//es la famosa media quary, el match con la medida menos de 500px dara true, en caso contrario dara false
//esto tambien se podria hacer en css  --------->   **

console.log(mq.matches)//verifica si la resolucion esta en la medida que nosotros mismo pusimos

mq.addEventListener("change",()=>{//le agregamos un evento que nos indica que cada vez que la variable mq cambie. (en este caso se ejecutara cada vez que matches cambie de true a false o viceversa), enviara un msj a consola.
    
    if (mq.matches) {
        console.log("resolucion cambiada")
        box.classList.replace("box","responsive-box")
    }else if(box.className == "responsive-box"){
        box.classList.replace("responsive-box","box")
        console.log("holaa")}
    
    console.log(mq.matches)
})//esta forma de hacerlo es para los casos en donde Mediante javascript queramos que alguna variable u objeto haga determinadas acciones dependiendo de la clase que tenga
//dicho de otra manera es para que se pueda agregar/modificar clases de algunos objetos y que mediantes estas clases los objetos tengan "tareas" diferentes.


