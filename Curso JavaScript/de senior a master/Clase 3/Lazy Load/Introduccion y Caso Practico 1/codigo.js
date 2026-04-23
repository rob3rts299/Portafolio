"use strict"

const publication = document.querySelector(".publication")
let counter = 0
 

const createPublicationCode = (namee, contentt) =>{
    //creamos los objetos y le creamos el tipo de documento que seran. (le creamos los atributos o parametros para que sean HTML)
    const container = document.createElement("DIV")
    const comments = document.createElement("DIV")
    const name = document.createElement("H3")
    const content = document.createElement("P")
    const btnComment = document.createElement("INPUT")
    const btnSend = document.createElement("INPUT")

    //Le agregamos las clases que tendran para que puedan obtener los estilos creados por css y puedan representar una publicacion.
    container.classList.add("publication")
    comments.classList.add("comments")
    btnComment.classList.add("comment")
    btnSend.classList.add("send")

btnComment.setAttribute("placeholder","Introduce un Comentario")//le agregamos el texto en el placeholder para que introduzcan algo 
name.textContent = namee//le agregamos el nombre que nos pasaran como titulo
content.textContent = contentt//le agregamos el contenido de la publicacion 

btnSend.type = "submit"//le ponemos el tipoo de boton que es el enviar en los comentarios

//procedemos a agregar todos los valores como hijos de la clase mayor, para que quede estructurado como una publicacion
comments.appendChild(btnComment)
comments.appendChild(btnSend)

container.appendChild(name)
container.appendChild(content)
container.appendChild(comments)

return container//por ultimo retornamos el contenedor con toda la estructura de una publicacion.
}


// let content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt a molestiae aut fugit est quo ipsum commodi natus, optio eaque!
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt a molestiae aut fugit est quo ipsum commodi natus, optio eaque!
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt a molestiae aut fugit est quo ipsum commodi natus, optio eaque!
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt a molestiae aut fugit est quo ipsum commodi natus, optio eaque!
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt a molestiae aut fugit est q.`


// publication.appendChild(createPublicationCode("lucas",content))//le agregamos como hijo a toda la funcion que es la que crea la publicacion, Esto es para ver si funciona bien la creacion de la publicacion
const loadMorePosts = entry =>{

    if (entry[0].isIntersecting) uploadPublication(4)
}

const observer = new IntersectionObserver(loadMorePosts)



const uploadPublication = async num =>{
    const request = await fetch("publication.txt")//ingresamos el fetch con el contenido del json
    const content = await request.json()//de esta manera estamos tomando el contenido del documento que tenemos vinculado con el fetch. Y lo transformamos a json
    
    // const arr = await request.json().content//de esta manera nos saltara un error porque no estamos dejando que se termine de leer todo el documento de texto y por lo tanto no se carga correctamente la promesa. No dejamos que termine de completarse la promesa.
    const arr = content.content
    const documentFragment = document.createDocumentFragment()//creamos un fragmento que nos servira para crear la publicacion
    // console.log(arr)//corroboramos que se haya leido correctamente el documento
    for (let i = 0; i < num; i++) {//con el for recorremos el json.
        if (arr[counter] != undefined) {
            const newPublication = createPublicationCode(arr[counter].name,arr[counter].contenido)//Creamos la nueva publicacion. mediante el uso de la funcion de crearpublication. y Le pasamos tanto el nombre como el contenido que se encuentra dentro de json
            documentFragment.appendChild(newPublication)//le agregamos como hijo la nueva publicacion a la variable fragmentada.
            counter++//asi no siga leyendo siempre a la misma persona
            console.log(counter)
        if (i==num-1) observer.observe(newPublication)
        } else {
            if (publication.lastElementChild.id !=="noMore") {
                let noMore = document.createElement("h3") 
                noMore.textContent="No hay mas Publicaciones."
                noMore.id="noMore"
                documentFragment.appendChild(noMore)
                publication.appendChild(documentFragment)
                break  
            }    
        }
    }

    publication.appendChild(documentFragment)//y por ultimo agregamos como hijo al contenido asi lo pueda mostrar

}


uploadPublication(3)//le indicamos entre los parentesis cuantas publicaciones mostrara.




//************visibility Change************

// addEventListener("visibilitychange",e=>{
//     // console.log("Se cambio de pestaña")//muestra cuando se cambia de pesteña en internet
//     console.log(document.visibilityState)//muestra el estado de la pestaña que esta presente. en visible o hidden
//     if (e.target.visibilityState == "visible") {
//         document.write("Volviste a la pagina. Despues de abandonarla")//cuando se vuelve a la pagina se escribe un texto
//     }else{
//         alert("Volviste")
//     }
// })


//******************Notifications******************

if (!('notification' in window)) {
    console.log("las notificaciones no estan disponibles en tu navegador")
}

// Notification.requestPermission()//es un metodo de este objeto que nos pregunta para pedir permiso para poder enviar notificaciones
//Esto nos devuelve un callback que vamos a utilizar

Notification.requestPermission(()=>{
    if (Notification.permission == "granted") {//permission es un metodo que verifica el estado de las notificaciones ==> si estan permitidas o bloquedas
        console.log("Permiso Permitido")//granted es permitido
        new Notification("Primera notificacion ")
    }
})
