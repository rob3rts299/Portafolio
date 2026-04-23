"use strict"

//******************eventos del objeto******************

// const circulo = document.querySelector(".circulo")
// const rectangulo = document.querySelector(".rectangulo")


// // circulo.addEventListener("dragstart",()=>console.log(1))//el evento dragstart se ejecuta cuando se esta agarrando un objeto de la pantalla. Cuando se comienza a apretar el click
// // circulo.addEventListener("drag",()=>console.log(2))//el evento drag se ejecuta cuando se esta agarrando un objeto y moviendo por la pantalla. O solamente cuando no se suelta el click
// // circulo.addEventListener("dragend",()=>console.log(3))//el evento dragend se ejecuta cuando se suelta el objeto agarrado de la pantalla en un lugar determinado de esta. Cuando soltamos el click

// rectangulo.addEventListener("dragenter",()=>console.log(1))//el evento dragenter se ejecuta cuando hay o existe un objeto agarrado y para por sobre el div o la zona a la cual se le asigna este evento.
// rectangulo.addEventListener("dragover",(e)=>{//el evento dragover se ejecuta cuando hay o existe un objeto agarrado y se mueve por el div o la zona en la cual se le asigna este evento.
//     e.preventDefault()//el evento dragover posee parametros que prohiben soltar los objetos en cualquier zona, al sacar el evento por defecta(default) nos permitira soltar en cualquier zona.
//     console.log(2)//de esta manera cuando ingresa un objeto que esta siendo arrastrado, le indica a la zona o cuerpo del objeto que tiene los "permisos" para poder soltar el objeto.
// })
// rectangulo.addEventListener("drop",()=>console.log(3))//el evento drop se ejecuta cuando hay o existe un objeto agarrado y se suelta sobre el div o la zona a la cual se le asigna este evento.
// rectangulo.addEventListener("dragleave",()=>console.log(4))//el evento dragleave se ejecuta cuando hay o existe un objeto agarrado y se va o sale del div o la zona a la cual se le asigna este evento.

// //******************data Transfer******************

// circulo.addEventListener("dragstart",(e)=>{
// console.log(e.dataTransfer)//al arrastrar un objeto, nos muestra las propiedades que tiene dataTransfer.
// e.dataTransfer.setData("clase",e.target.className)//de esta manera nos indica o nos señala cual es el objeto que esta siendo arrastrado.
// //para este ejemplo se usa el *className*, Pero es recomendable usar Id. Porque los Id son unicos y no nos traeran problemas en los casos de tener varios objetos con la misma clase.
// // Si sacamos el className del setData nos devolvera el tipo de atributo que es. En este caso es un objeto.
// // console.log(e.dataTransfer.getData("clase"))//nos devuelve el nombre de la clase. Y mediante el typeof podemos saber que lo que nos envia el getData es un string.
// })

// rectangulo.addEventListener("drop",(e)=>{
//     console.log(e.dataTransfer.getData("clase"))}
//     )


//*******************Ejemplo*******************

const zona = document.querySelector(".zona")
zona.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura")//le asignamos a n. el numero (posicion) de la textura que se haya seleccionado. 
    zona.style.background = `url("Images/textura${n}.png")`//le cambiamos directamente el style de zona. Agregandole la textura que se haya seleccionado.
    //en pocas palabramos le pasamos la url. lo unico que se modifica es el numero de la imagen todo dependiendo de aquella a la cual seleccione

})
for (let i = 1; i < document.querySelector(".texturas").children.length +1 ; i++) {
//recorre el div con la clase texturas y hace el conteo con la cantidad de hijos que tiene esta clase.  
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>addtexture(i,e)) //y de esta manera le agregamos el evento para la funcion de añadir la textura a la zona.
    
}

const addtexture = (n,e) =>{
    e.dataTransfer.setData("textura",n)

}