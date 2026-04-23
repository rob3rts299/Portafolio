//Programa Hecho sin Promise.

// function test(callBack){
//     callBack("pedro")
// }

// function decirNombre(nombre){
//     console.log(nombre)
// }

// test(decirNombre)//de esta manera esta funcion llama a la otra funcion y muestra por consola el nombre que nosotros pusimos
// test((nombre)=> console.log(nombre))//este es otra forma de colocar el call back, igual se puede colocar asi por ser una sola linea de codigo
// //otro metodo//

// class persona{
//     constructor(name, instagram){
//         this.name = name
//         this.instagram = instagram
//     }
// }

// console.log(new persona("roberto", "@RobertsPereyra"))//este caso de demostracion es para una personita

// const datosPersonas = [
//     ["Roberto","@RobertsPereyra"],
//     ["francoo","@franquitoo"],
//     ["fer","@ferchu"],
//     ["dalti","@soydalto"]
// ]

// const personas = []

// for (let i = 0; i < datosPersonas.length; i++) {
//     personas[i] = new persona(datosPersonas[i][0],datosPersonas[i][1])//se realiza el arreglo de las personas, con su nombre e instagram
// }

// const obtenerPersona = (id,cb) =>{
//     if(personas[id] == undefined){//aca comprobamos en el caso de que se busque un id, que no tenga registro de una persona
//         cb("No se ha podido encontrar a la persona")
//     } else{
//         cb(null,personas[id])//aca enviamos el id de la persona con el uso del cb a la otra funcion
//     }//En esta funcion le pasamos el id y el callback para poder obtener los datos de las personas.
// }

// const obtenerInstagram = (id,cb) =>{
//     if(personas[id].instagram == undefined){//aca comprobamos en el caso de que se busque un id, que no tenga registro del instagam de una persona
//         cb("No se ha podido encontrar a la persona")
//     } else{
//         cb(null,personas[id].instagram)//aca enviamos el instagram de la persona con el uso del cb a la otra funcion
//     }//En esta funcion le pasamos el id y el callback para poder obtener el datos del instagram de las personas.
// } 

// obtenerPersona (2,(err,persona,id)=>{
//     if(err){
//         console.log(err)    
//     } else{
//         console.log(persona.name)
//         obtenerInstagram(id,(err,instagram)=>{
//             if(err){
//                 console.log("No se ha podido encontrar el instagram")
//             } else{
//                 console.log(instagram)
//             }
//         })
//     }
// })//Con esta funcion mostramos los datos de las personas, y si se llega a encontrar un error lo mostramos tambien


//Promise

// let nombre = "pedro"

// const promesa = new Promise((resolve,reject)=>{
//     if (nombre !== "pedro") reject("Perdon, el nombre no es pedro")//el reject va a lanzar un error siempre que no se cumpla la condicion
//     else resolve(nombre)
// })

// // console.log(promesa)//mostramos la promesa
// // console.log(promesa.promiseStatus)//como tiene los datos encapsulados no mostrara nada, pero es un un objeto como tal
// promesa.then((resultado)=>{
//     console.log(resultado)
// }).catch((e)=>{
//     console.log(e)
// })

/**************************resolver el problema anterior con promise*********************************/

// function test(callBack){
//     callBack("pedro")
// }

// function decirNombre(nombre){
//     console.log(nombre)
// }


// class persona{
//     constructor(name, instagram){
//         this.name = name
//         this.instagram = instagram
//     }
// }

// const datosPersonas = [
//     ["Roberto","@RobertsPereyra"],
//     ["francoo","@franquitoo"],
//     ["fer"],
//     ["dalti","@soydalto"]
// ]

// const personas = []

// for (let i = 0; i < datosPersonas.length; i++) {
//     personas[i] = new persona(datosPersonas[i][0],datosPersonas[i][1])//se realiza el arreglo de las personas, con su nombre e instagram
// }

// const obtenerPersona = (id) =>{
//     return new Promise((res,rej)=>{//res = resolve / rej = Reject
//         if(personas[id]== undefined) rej("No se ha podido encontrar a la persona")
//         else res(personas[id])//busca a la persona mediante el id
//     })
// }

// const obtenerInstagram = (id) =>{
//     return new Promise((res,rej)=>{//res = resolve / rej = Reject
//         if(personas[id].instagram== undefined) rej("No se ha podido encontrar el instagram de la persona")//preguntamos si el id posee un valor, o es undefined. Si posee valor pasa al else, en caso contrario devuelve el reject/error
//         else res(personas[id].instagram)//busca el instagram de la persona, mediante el id
//     })

// } 
// let id = 2

// obtenerPersona(id).then((persona)=>{
//     console.log(persona.name)
//     return obtenerInstagram(id)//retornamos una promesa, en este caso obtenerInstagram. Y como retornamos una promesa para poder acceder a los valores usamos el them. caso siguiente
// }).then((instagram)=>{//usamos el then para poder obtener los valores de la promesa retornada, y como se returno la promesa en consideracion todo el bloque se vuelve una promesa. Por eso es esencial usar el them.
//     console.log(instagram)//por ultimo mostramos el instagram
// }).catch((e)=>{//por si llegara a producirse un error. En este caso mostrara el msj del error 
//     console.log(e)
// })
// //Con esta funcion mostramos los datos de las personas, y si se llega a encontrar un error lo mostramos tambien a diferencia de no usar promesas/promise es que podemos sacas los errores con un solo catch.

//***************Async Await ***********//

// const objeto = {
//     propiedad1: "valor1",
//     propiedad2: "valor2",
//     propiedad3: "valor3",
// }

// const obtenerInfo = () =>{
//     // setTimeout(()=> {return objeto},3000)//De esta manera no se podra realizar el return pero es una buena manera de intentarlo
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(objeto)},5000
//         )//De esta manera si se realizara, porque las promesas son asincronas, trabajan en tiempo real y cuando poseen la informacion realizan la operacion
//     })//devuelve las especificaciones del objeto tras 5 segundos.
// }

// obtenerInfo().then(resultado => console.log(resultado))

// //uso de async

// const mostrarResultados = async ()=>{
//     resultado = await obtenerInfo()
//     console.log(resultado)
// }

// mostrarResultados()


//*******Razon por la que promise no nos sirve*******//
const obtenerInfo = (text)=>{
return new Promise((res,rej)=>{
    setTimeout(()=>{res(text)},Math.random()*200)
})
}


// obtenerInfo("1: juan").then(resultado => console.log(resultado))
// obtenerInfo("2: roberto").then(resultado => console.log(resultado))
// obtenerInfo("3: pedro").then(resultado => console.log(resultado))

//la razon por la que no nos sirve promise, es porque no podemos controlar el orden si se usa un tiempo randomico.
//si especificamos el tiempo nosotros se lo podria usar de caso contrario es mejor usar asyn await

const mostrarData = async () =>{
    // data1 = obtenerInfo("1: juan")//de esta manera esto nos devuelve una promise
    data1 = await obtenerInfo("1: juan")//await basicamente accede al valor que retorna la promesa poor eso no nos tira un promise solamente la promesa
    data2 = await obtenerInfo("2: roberto")//usando el await esto no avanza hasta que se consigue el resultado, de esta manera podemos tener un "orden" de lo que se esta ejecutando
    data3 = await obtenerInfo("3: pedro")
    console.log(data1)
    console.log(data2)
    console.log(data3)
}

mostrarData()