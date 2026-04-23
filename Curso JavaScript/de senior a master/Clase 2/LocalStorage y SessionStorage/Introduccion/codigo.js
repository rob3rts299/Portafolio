"use strict"
//**************************Local storage**************************

// localStorage.setItem("nombre","pedro")//con setItem nosotros le brindamos el valor que corresponde a la ubicacion correspondiente. Agregamos un objeto al almacenamiento.

// console.log(localStorage)
// console.log(localStorage.getItem("nombre"))//con getItem nosotros obtenemos el valor que corresponde a la ubicacion que se encuentre

// let nombre = localStorage.getItem("nombre")
// console.log(nombre)//tambien podemos obtener lo almacenado y agregarlo a una variable dentro del programa para modificarlo.

//**************************Session storage**************************

// console.log(sessionStorage)

// sessionStorage.setItem("nombre", "pedriiitooo")//al igual que el local storage asi agregamos un objeto dentro del sessionstorage

// console.log(sessionStorage.getItem("nombre"))//de esta manera obtenemos el valor mediante la busqueda del nombre del item.
// //cabe resaltar que al actualizar la pagina web y no se vuelve a agregar el objeto, este mismo se pierde. a diferencia del localstorage que lo conserva



// setTimeout(() => {
//     sessionStorage.removeItem("nombre")//Elimina el objeto que se llame nombre al paso de 2 segundos. Mediante el uso de removeItem.
//     //De igual manera funciona con el LocalStorage
// }, 2000)


// setTimeout(() => {
//     sessionStorage.clear()//Elimina todos los objetos que se encuentren en el sessionstorage al paso de 2 segundos. Mediante el uso de crear.
//     //De igual manera funciona con el LocalStorage
// }, 2000)


//******************Uso del localstorage******************

const modal = document.querySelector(".modal-overlay")//tomo la clase del modal (div)
const defineLanguage = () =>{
    document.querySelector(".en").addEventListener("click",()=>{//tomo el button con la clase "en" (ingles) y le agregamos un evento 
        localStorage.setItem("idioma","en")//le agregamos un item en el localStorage que nos indique si el usuario quiere el idioma ingles o español
        modalOut()//llamamos la funcion para cerrar el modal. Y que se pueda visualizar la pagina nuevamente
    })

    document.querySelector(".es").addEventListener("click",()=>{//tomo el button con la clase "es" (español) y le agregamos un evento 
        localStorage.setItem("idioma","es")//le agregamos un item en el localStorage que nos indique si el usuario quiere el idioma español o ingles
        modalOut() 
    })
}


const modalOut=()=>{
    
    modal.style.animation = "desaparecer 1s forwards"//desaparecemos el model, mediante la animation que creamos en el css.

    setTimeout(()=>modal.style.display = "none",1000)//le sacamos el stylo mediante el intervalo de 1 segundo
}
let idioma = localStorage.getItem("idioma")//tomamos desde el localstorage el valor del item que agregamos. para luego hacer una condicion

if(idioma===null) defineLanguage()//si el idioma es igual a null (osea que se encuentra vacio) llamamos a la funcion para definir el lenguaje
else {
    console.log(`el idioma es ${idioma}`)//en caso de que haya un valor dentro del localstorage con el nombre idioma. Lo mostramos por consola.
    modal.style.display="none"//le sacamos el stylo al modal.
}


// if (idioma=="es"){
//     viewSpanish() //creariamos una funcion que traduce la pagina al español (O usariamos el uso de alguna API)
// }
// else viewEnglish() //creariamos una funcion que traduce la pagina al ingles (O usariamos el uso de alguna API)
