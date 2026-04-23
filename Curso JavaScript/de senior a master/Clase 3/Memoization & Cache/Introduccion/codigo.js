"use strict"

// const doSomething = num =>{
//     const a = 20
//     const b = 12
//     let c = 0
//     for (let i = num -1 ; i >= 0 ; i--) {
//         for (let j = i -1; j >= 0; j--) {
//             c+= a*b
//         }
//     }
//     return c
// }
// console.log("Funcion sin Memoizer: ")
// console.log(doSomething(40000))//al llamar la funcion esto tardara un poco, porque el funcionamiento de la funcion es largo

// const date = new Date()//registramos los segundos antes de ejecutar la funcion
// doSomething(60000)

// console.log(new Date() - date)//es ver la variacion del tiempo que tardo en ejecutar la funcion

// //Si ejecutamos muchas veces esta funcion. No seria optimo porque ocupa mucho tiempo y recursos. Para eso se utiliza el memoization

// //***********Memoizer***********
// console.log("Funcion con Memoizer: ")
// let cache = []

// const memoizer = func =>{//tomo como parametro a una funcions


// return e =>{
//     const index = e.toString()
//     if (cache[index] == undefined) {//verificamos primero si existe el cache index. 
//         cache[index] = func(e)//Si no existiere lo ejecutamos
//     }
//     return cache[index]//en caso de que exista lo retornamos
// }
// }

// const memo = memoizer(doSomething)

// const date2 = new Date()
// memo(60000)
// console.log(new Date() - date2)

// const date3 = new Date()
// memo(30000)
// console.log(new Date() - date3)

// const date4 = new Date()
// memo(60000)
// console.log(new Date() - date4)

// const date5 = new Date()
// memo(20000)
// console.log(new Date() - date5)
//tarda en ejecutarse la primera, luego las demas no tardan en ejecutarse debido a que posee datos almacenados en la cache.
//siempre tarda en hacerlo a la primera ejecucion distinta.
//cuando hay ciertos datos que se van a repetir, es recomendable trabajar con el memoizer.



//******************Cache******************
//se visualiza en application.
// caches.open("static-files")//abrimos el cache. Dentro de los parentesis creamos el nuevo objeto cache (es como crear una Base de Datos)

//Response-Type ====> Indica el tipo de respuestas
//Content-Type ====> Indica el tipo de contenido por Ej. Text HTML
//Content-Length ====> Indica cuanto mide/tamaño
//Time-Cached ====> Indica el momento en el que lo almacenamos en cache


caches.open("static-files").then(cache =>{//al trabajar con cache en realidad estamos trabajando con promesas por lo tanto se puede obtener el then del cache
    console.log(cache)//nos devuelve un objeto cache. donde podremos ver todos los prototipos que posee

    // cache.add("index.html")//Se le envia una url y este va a almacenar el recurso asociado. Lo agregara en application Siempre que el archivo exista.
    //otra forma de obtener este mismo resultado es llamar a fetch() y usar put() para agregar los resultados a la cache

    cache.addAll(["index.html","style.css","codigo.js"])//a diferencia del add normal, este agrega todos. Por lo tanto hay que pasarlo como un array

    cache.match("index.html").then(res =>{
        console.log(res)//mostramos lo que nos retorna la promesa
    })//devuelve una promise que se resuelve con las respuestas asociadas con la primera solicitud coincidente con el objeto almacenado
    //como se trabaja con promesas se agrega el then. Y cuando decime que una promise "se resuelve" hace referencia a que devuelve un valor
    cache.matchAll("index.html")//nos devolveria todos los datos que coincidan con lo que especificamos dentro de los parentesis. En este caso no lo haria porque solamente tenemos 1 solo index.html
    //para tener un ejemplo, lo podemos comparar con el uso de document.

    fetch("index.html").then(res=>{//se usa fetch 
        cache.put("index.html",res)//se dice primera la url, y en el segundo parametro pasamos el res.
        //Es una forma de agregar el archivo mediante el fetch como dijimos anteriormente.
        //Esto es reemplazado con el cache.add("index.html")
        //se usaba el put para actualizar un archivo al cual se le ha agregado nuevo contenido pero esto tambien se puede hacer con cache.add asi que es recomendable usar este ultimo.
    })

    // cache.delete("index.html")//elimina el recurso/archivo que se le especifique entre parentesis
    //mediante el then lo que se puede hacer es eliminar un recurso y agregar otro

    cache.keys().then(res=>{
        console.log(res)//muestras las keys de los archivos que hay adentro del cache 
    })//devuelve una promise que se resuelve (que brinda) en una matriz de keys de los objetos almacenados


})





