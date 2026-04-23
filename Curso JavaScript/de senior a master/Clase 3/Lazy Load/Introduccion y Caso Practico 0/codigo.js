"use strict"

const publication = document.querySelector(".publication")

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


const uploadPublication = async num =>{
    const request = fetch("publication.txt")
    const arr = await request.json()
    console.log(arr)
}

uploadPublication()
