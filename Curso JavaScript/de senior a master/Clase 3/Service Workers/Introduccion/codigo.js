"use strict"

//********Service Workers********
//Es un archivo javascript que lo que hace es interceptar todas las peticiones de un servidor.
// console.log(navigator.serviceWorker)//nos muestra el prototype de serviceWorker
// if (!navigator.serviceWorker) {
//     console.log("Tu navegador no soporta service worker")//de esta manera comprobamos si nuestro navegador posee al serviceWorker
// }

// if (navigator.serviceWorker) {//de esta manera nosotros instalamos un serviceWorker
//     navigator.serviceWorker.register("serviceW.js")//este metodo sirve para registrar serviceWorker.
//     //son archivos que se quedan instalados en la computadora. 
//     //Para comprobar si se instalo. Ir A Application -----> Service Worker
// }


// navigator.serviceWorker.ready.then(res=>{//como el service worker tarda en cargar mediante el metodo ready, comprobamos que ya se encuentra listo y procedemos a usar la funcion
//     // console.log(res)//nos mostrara el service worker registration
//     res.active.postMessage("hola broo como andas")//de esta manera nosotros enviaremos un msg al service worker y mediante el service worker lo mostraremos

//     setTimeout(() => {
//         console.log(res.active)//muestra el service worker activo, que en este caso sera el nuestro
//     }, 3000);
// })    

// navigator.serviceWorker.addEventListener("message",e=>{//de esta manera nosotros podemos recibir un msg desde el service worker
//     console.log("Mensaje recibido del service worker: ")
//     console.log(e.data)
// })