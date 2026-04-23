//*********************events ********//
//metodo por event Handlers
// const button = document.querySelector(".button")

// button.onclick = () =>{
//     alert("holaaa")
// }//usamos una funcion flecha para determinarle el evento a realizar al button. "ya no es recomendable hacerlo" trae varios problemas de compatibilidad

//******************metodo por event Listeners o Llamada de evento o Escucha de evento ***********************//

// button.addEventListener("click",saludar)

// function saludar(){
//     alert("hola")
// }//solamente se pueden hacer mediante el modo tradicional de una funcion. NO SE PERMITEN LAS FUNCIONES FLECHAS

// button.addEventListener("click",()=>{
//     alert("holiwissss")
// })//otro metodo de como se puede generar el evento. IMPORTANTE: En este caso si se puedo usar las funciones flechas
// function saludar(){
//     alert("hola")
//     button.removeEventListener("click",saludar)//una vez hecho el evento lo removemos. de esta manera el button queda sin hacer nada
// }

// button.addEventListener("click",(e)=>{
//     console.log(e.target)//muestra por consola. El evento o el fenomeno que provoco dicho evento. En este caso el button
// })//una forma de poder acceder a los parametros del evento.     IMPORTANTE: No olvidarse de color entre parentesis el evento (se puede llamar de cualquier forma).


//*************************event Flow o Flujo de eventos **************//

const button = document.querySelector(".button")
const container = document.querySelector(".container")

// button.addEventListener("click",(e)=>    {
//     alert("di click en el boton")
//     e.stopPropagation()//Evita que se siga propagando los eventos que les siguen. 
// })//este se ejecutara primero por ser el mas especifico. Dicho de otra manera se ejecutara primero porque es el hijo del contenedor.

// container.addEventListener("click",(e)=>{
//     alert("di click en el contenedor")
// }//,true
// )//este se ejecutara luego por ser menos especifico. Dicho de otra manera se ejecutara luego por ser el padre que contiene al otro evento mas especifico (Hijo)

//El flujo de evento es que se ejecute del mas especifico al menos especifico o VICEVERSA
//El event Bubbling o Evento burbuja(el por defecto) El es que se ejecutara primero el evento mas especifico.
//El event capturing o Evento de captura El es que se ejecutara primero el evento menos especifico. Para que funciones solamente tendremos que agregarle true al final del event.


//***********Mouse Events ***********+*/

// button.addEventListener("dblclick", (e)=>{
//     alert("Si funciona el doble click n.n")
// })//funciona el evento con un doble click

// container.addEventListener("mouseover", (e)=>{
//     alert("Funciona el mouse over n.n")
// })//se tira el evento cuando se pasa el mouse por encima, en este caso del contenedor

// container.addEventListener("mouseout", (e)=>{
//     alert("Funciona el mouse out n.n")
// })//se tira el evento cuando se pasa el mouse por encima, en este caso a diferencia del anterior, el evento se ejecutara cuando se sale del contenedor, no cuando se entra.

// container.addEventListener("contextmenu", (e)=>{
//     alert("Funciona el click derecho del mouse n.n")
// })//se ejecuta el evento cuando se le da click derecho del mouse, en este caso dentro del contenedor

// container.addEventListener("mouseenter", (e)=>{
//     alert("se esta usando el mouse enter")
// })//El evento se ejecutara siempre que el mouse se posicione dentro del contenedor en este caso. Este se lo usa sobre todo en internet explore

// button.addEventListener("mousemove", (e)=>{
//     alert("Se esta usando el mouse move n.n")
// })//funciona de igual manera que el anterior la diferencia es que el metodo anterior, funciona como un evento burbuja, en cambio mouse move solamente es especifico del objeto al que se lo asigne

// container.addEventListener("mouseleave", (e)=>{
//          alert("Funciona el mouse leave n.n")
// }) // Es como el mouse out, la diferencia es que este evento se va a ejecutar siempre que el mouse se mueva, la unica forma que no se ejecute es que dejemos quieto el mouse

// container.addEventListener("mousedown", (e)=>{
//     alert("Haciendo funcionar el mouse down n.n")
// })//este evento se ejecutara apenas se presione el mouse 

// container.addEventListener("mouseup", (e)=>{
//     alert("Haciendo funcionar el mouse up n.n")
// })//este evento se ejecutara cuando se suelte el mouse en el interior del contenedor

//********keyboard Events **************/

const input = document.querySelector(".input-test")

// input.addEventListener("keydown", (e)=>{
//     console.log("una tecla fue presionada")
// })//el evento se lanza cuando se presiona una tecla dentro de input

// input.addEventListener("keypress", (e)=>{
//     console.log("un usuario presiono una tecla y la solto")
// })//el evento se lanza cuando se presiona una tecla dentro de input y se suelta la tecla luego de escribir


// input.addEventListener("keyup", (e)=>{
//     console.log("una tecla fue soltada")
// })//el evento se lanza cuando se suelta la tecla dentro de input


//******************interface envets ***************//

// const img = document.querySelector(".img-test")

// img.addEventListener("error",(e)=>{
//     console.log("ERROR. Ha ocurrido un ERROR")

// })//siempre que haya un error en el objeto que le asignemos este evento, nos dara el msj que le coloquemos al evento

// window.addEventListener("load",()=>{
//     console.log("Se ha cargado el sitio correctamente.")
// })//una vez se carga todo correctamente, el evento se ejecuta. Tambien se puede usar este evento sin la necesidad de poner el "WINDOW." al inicio

// addEventListener("beforeunload",()=>{
// console.log("Te estas por ir del sitio.")
// })//cuando se esta cargando el enlace para poder irse del sitio, el evento se ejecuta

// addEventListener("unload",()=>{
//     console.log("Te estas por ir del sitio.")
//     })//Tiene la misma funcionalidad que el anterior, este evento solo se ejecuta cuando te estas por ir del sitio.

// addEventListener("resize",()=>{
//     console.log("Se esta cambiando la vista del documento.")
//     })//el evento se ejecuta cuando se esta cambiando el tamaño de la pestaña del sitio. O cuando se ajusta en el momento de usar la consola. En otras palabras cuando se cambia la resolucion
    
// addEventListener("scroll",()=>{
//     console.log("se ha scrolleado el sitio.")
//    })//El evento se ejecuta cuando se scrollea, en pocas palabras cuando se usa la ruedita del raton para bajar o directamente usar la barra para bajar
    

const containerSelection = document.querySelector(".selection")

// input.addEventListener("select",(e)=>{
//     console.log(e)//muestra todas las propiedades de la palabra una vez seleccionada
//     console.log(e.target.selectionStart)//muestra el indice desde donde comienza a seleccionarse la palabra en el input
// })

// input.addEventListener("select",(e)=>{
//     let start = e.target.selectionStart //toma el valor del indice desde donde comienza la seleccion. 
//     let end = e.target.selectionEnd //toma el valor del indice en el cual termina la seleccion
//     let textComplete = input.value//toma el valor del input.
//     containerSelection.innerHTML = textComplete.substring(start,end)//codifica la palabra seleccionada y la convierte en string para ser puesta en la pagina web
// }) //cuando se selecciona una palabra del input este la codifica y la convierte en string para poder typearla en el div containerSelect y mostrarla por el sitio web


//****Posible uso*****//

input.addEventListener("keyup",(e)=>{
    let tecla = e.key
    nuevoContenido = `La ultima tecla presionada fue: ${tecla}`
    containerSelection.innerHTML = nuevoContenido
})


//*******timers/Temporizadores*******//

// setTimeout(() => {
//     document.write("HOLIWISSSS")
// }, 2000);//forma de usar el temporizador, primero va la funcion y luego la cantidad en milisegundos para que se ejecute la funcion


// const saludar = ()=>{
// console.log("HOLAAAAAAAA, Con otro metodo")
// }

// setTimeout(saludar, 2000);//otro metodo para poder usar el setTimeout

// const timer = setTimeout(() => {
//     document.write("HOLIWISSSS")
// }, 2000);

// clearTimeout(timer)//de esta forma hacemos que no se ejecute el temporizador

// setInterval(() => {
//     document.write("HOLIWISSSS")
// }, 2000);//me reproduce la misma funcion en intervalos constantes definidos por el tiempo que yo mismo le asigne


const interval = setInterval(() => {
    document.write("HOLIWISSSS")
}, 2000);

// clearInterval(interval)//de esta misma manera que el anterior procedimiento, frenamos la lectura infinita de la funcion de intervalo.

setTimeout(()=>{
    clearInterval(interval)
},5000)//de esta forma nosotros hacemos que se ejecute un par de veces antes de terminar la iteracion.