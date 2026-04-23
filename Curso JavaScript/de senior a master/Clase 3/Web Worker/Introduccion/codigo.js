"use strict"

//El worker es una funcion que nos ayudara a ejecutar algun archivo en segundo plano cuando nuestro 
//sistema principal este cargando un servicio. Y no pueda cargar otro nuevo debido a que solamente puede trabajar con un servicio a la vez
const worker = new Worker("worker.js")//para usar el worker lo creamos como un nuevo constructor y le agregamos el archivo el cual sera ejecutado en segundo plano
//es un archivo que no interfiere directamente con la pagina, osea no entra en el circulo del event loop de la pagina

// const worker2 = new Worker("example.js",Options)
//si llegaramos a tener este archivo de ejemplo y lo quisieramos vincular a un worker. Si el enlace de este archivo (protocolo/host:puerto) Es totalmente distinto, el archivo no se podra abrir. 
//a este tipo de problemas se los conoce como Same Origin Politic
//no podemos llamar a otros archivos o peticiones http sin que sean del mismo origen.
//options Worker:
// type: classic or module.
// Credential: omit, same-origin, or include
// name: especifica con que nombre se identificara el "dedicatedWorkerGlobalScope"

console.log(worker)//muestra todo el prototipo del worker. Y tambien muestra el archivo al cual lo estamos vinculando o pasando.
//tiene limitaciones, no puede ser un archivo .js completamente.

// const uploadData = async div =>{
//     const req = await fetch("information.txt")
//     const res = await req.json()
//     const arr = res
//     document.querySelector(div).innerHTML = arr
// }//tomemos el objeto y los mostramos en la pagina. pero como sera un archivo json no se mostrara el contenido de dentro.


//al darle click al boton este generara el evento y entrara en un bucle infinito. Y mediante se este realizando ese bucle
//no se podra hacer ningun otro tipo de accion 
// document.querySelector(".button").addEventListener("click",()=>runLoop(".loadResult"))

// const runLoop = () =>{
//     while (true){
//         console.log("bucle 1")
//     }
// }
// --------------> Procederemos a hacer la misma operacion en un worker.

document.querySelector(".button").addEventListener("click",()=>runLoop(".loadResult"))
worker.addEventListener("message",e=>{
    console.log(e.data)//mostramos el msj enviado por el worker.
    worker.terminate()//si lo ponemos en esta zona una vez obtenida la respuesta no se ejecutara de nuevo. Evitando sobrecargas.
})

const runLoop = () =>{
      //si se quiere trabajar con objetos, entonces se tendra que enviar por postMessage
    // worker.postMessage(true) 
    worker.postMessage("hola mi broo, todo bien")//Si le enviamos un string al worker este obtendra de data a ese mismo string

    // setTimeout(() => {//despues de 2 segundos, se dejara de ejecutar el bucle.
    //     worker.terminate()//termina el bucle asi no se siga ejecutando.
    // }, 2000);

}