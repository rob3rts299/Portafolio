//cuando trabajamos con service workers y queres trabajar con ellos podemos usar:
//Absolutamente nada
//this
//self ----> Es lo mas comun cuando trabajos con service worker.

// self.addEventListener("install", e=>{
// console.log("Instalando Service Worker.")//solo se dispara una sola vez.
// //los service worker se instalan una sola vez. 
// })

// self.addEventListener("activate",()=>{
//      console.log("el service worker esta activo.")//de esta manera verificamos si el service worker esta activo
//      //RECORDAR que siempre hay que darle "update" desde la pestaña de application
// })

// self.addEventListener("error",e=>{//en caso de que tenga un error el service worker
//     e.defaultPrevented
//     console.log("El service worker tuvo un error")
// })

// self.addEventListener("fetch",()=>{//debido a que lo service worker interceptan la informacion.  es que podemos trabajarlo como fetch
//     console.log("service worker interceptando peticion")//cada vez que el usuario haga algo o actualice la pagina se ejecutara este service worker
// })

// self.addEventListener("message",e=>{//recibe el msg y lo muestra por consola.
//     console.log("Mensaje recibido del navegador: ")
//     console.log(e.data)
//     e.source.postMessage("Bien mi broo")//de esta manera nosotros mandamos un msj desde el service worker al codigo de javascript
// })

// //*******mostrar la pagina offline*******

// let version = "version 2"

// self.addEventListener("install",e=>{
//     console.log("Instalando Service Worker")
//     caches.open(version).then(cache=>{
//         cache.add("index.html").then(res=>{
//             console.log("Todo ha salido Correctamente")
//         }).catch(e=>{
//             console.log(e)
//         })
//     })
// })


// self.addEventListener("activate",()=>{
//     caches.keys().then(key=>{
//         return Promise.all(//usamos el retorno de una promesa para darle el funcionamiento ya que en caso contario no funcionaria
//             key.map(cache=>{//mapeamos el cache para verificar las keys
//                 if (cache !== version) {//revizamos si existe una version anterior
//                     console.log("cache antiguo, eliminado.")
//                     return caches.delete(cache)//Eliminamos el cache, si es que existe
//                 }
//             })
//         )

//     })
// })


// self.addEventListener("fetch",e=>{
//     e.respondWith(async function(){
//         //respondemos con el respondwith y le pasamos con que respondemos a la solicitud
//         const answerCache = await caches.match(e.request)
//         if (answerCache=true) return answerCache //en caso de que haya algo en cache. lo vamos a retornar
//         return e.request//en caso de que no haya nada en case vamos a verificar si se puede acceder a internet y cargar los elementos
//         })
    
// })
