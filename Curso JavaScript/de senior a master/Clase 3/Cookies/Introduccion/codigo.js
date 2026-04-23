"use strict"

//*******cookies*******
//son datos, "archivos", la pagina web crea que se guardan en el navegador del usuario
//hay diferentes tipos de cookies porque los datos que estas originan sirven para muchas cosas. (para mas buscar informacion)

//formated
// COOKIES:     Clave=valor;atr;atr;atr;atr

// let cookies = document.cookie//creamos la cookies. En este caso estara vacio porque no posee nada. Una forma de crear la cookie

// document.cookie = "user=Roberto"//creamos una cookie, para visualizarla vamos al apartado de cookies en la seccion de application
// document.cookie = "apellido=Pereyra,illanes"//creamos una cookie, para visualizarla vamos al apartado de cookies en la seccion de application
// document.cookie = "job=Programmer"//creamos una cookie, para visualizarla vamos al apartado de cookies en la seccion de application

// const createCookie = (name, expires, path,age) =>{//Formato completo de una funcion que crea cookies
//     document.cookie = `${name};expires=${expires};path=${path};age=${age}`//creamos la cookie con todos los parametros basicos que poseen regularmente las cookies, Curiosidad: cuando se crean cookies se suele pedir el path o el age. No son necesario tener los dos

// }
const newDateUTC=day=>{
    let date = new Date()
    date.setTime(date.getTime()+day*1000*60*60*24)//de esta manera nosotros obtenemos la fecha en dias. Obtenemos la fecha en formato unix (milisegundos), y procedemos a sumar y multiplicar para que se vean en formato dia (sumar 1000 para los segundos; multiplicar 60 para los minutos y horas y multiplicar 24 para los dias.)
    return date.toUTCString()//retornamos la nueva fecha
}

const createCookie = (name,day) =>{
    let expires = newDateUTC(day)
    document.cookie= `${name};Dias=${expires};`//creamos la cookie mediante el valor del nombre que nos otorgue el usuario y luego los dias que vamos a dejar este cookie
}


document.cookie = "user= Robert;expires="//agregamos otros atributos que se agregan al principio, luego no se los puede cambiar
//formato del expires es el del meridiano de greenwitch

// createCookie("user=Roberto","Mon 1 Apr 2024 12:00:00 UTC","/","tiempo que durara la cookie escrito en segundos.")//formato completo de la entrega de valores a la funcion de creacion de cookies

createCookie("user= Roberto",4)

console.log(document.cookie)//mostramos las cookies que creamos

const readCookies = cookieName=>{
    let cookies = document.cookie
    cookies = cookies.split(";")//vamos separando las cookies mediante el ;
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim()//removemos los espacios en blanco que pueden aparecer en las cookies cuando se las convierte en un string
        if (cookie.startsWith(cookieName)) {//esto es en el caso de que se arranque con el cookieName                                                                                                                                               0        1     Forma para el array.
            return cookie.split("=")[1]//de esta manera nosotros le estamos dando forma al objeto. Separa el objeto mediante el "=" por ejemplo: "usuario=lucas"     Lo separa en 2 elemento (el que viene antes del array y despues de este)  ["usuario","lucas"]
        }
    }
    return "no hay cookies con ese nombre"
}

//para modificar una cookie solamente es necesario volverla a crear o sobreescribirla.
document.cookie = "user=kjsadmnalksmd"//asi se modificara la cookie user => Pasa de roberto a kjsadmnalksmd. corroborarlo por la funcion de leer la cookie

//para eliminar una cookie solamente tenemos que modificar el atributo de "expiracion" que posee la cookie
//por ejemplo creamos una nueva cookie
createCookie("Eliminated= ERROR",5)
//para eliminarla creamos la misma cookie cambiandole el expires or max-age
document.cookie="Eliminated=0;max-age=0"