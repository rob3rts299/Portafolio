//Como el worker es un archivo que no tiene como a windows de base, hay que pasarle parametros 

console.log("Holisss, si anda el worker PAH")

// const runLoop = () =>{
//     while (true){
//         console.log("bucle 1")
//     }
// }

// addEventListener("message",runLoop())

//esto sirve cuando se requiere cargar algo demasiado pesado y no dejar a los usuarios esperando a la recarga del contenido.
//de esta manera la carga de datos se hara en segundo plano y el usuario podra seguir navegando por la pantalla inicial o por el event loop de la pagina.

addEventListener("message",e=>{
  
    // console.log(e)//nos muestra todos los parametros que podemos acceder y con los cuales podemos dar diferentes acciones a la funcion
    // console.log(e.data)//accede al contenido del mensaje

    if (e.data.length > 4) {
        console.log(e.data)//mostramos el msj que nos llega
        postMessage("Todo bien y vos?")//le enviamos de vuelta un msj al codigo.

    }


})