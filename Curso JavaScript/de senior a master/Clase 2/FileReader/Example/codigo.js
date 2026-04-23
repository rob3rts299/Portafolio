"use strict"

const zone = document.querySelector(".zone-drag")//vinculamos la variable zone con el div con la determinada clase

zone.addEventListener("dragover",e=>{//mientras el archivo este sobre el rectangulo donde se soltara se cambiara el color
    e.preventDefault()
    changeStyle(e.srcElement,"#222")
})

zone.addEventListener("dragleave",e=>{//cuando el archivo se salga del rectangulo donde se soltara volvera al color original
    e.preventDefault()
    changeStyle(e.srcElement,"#888")
})

zone.addEventListener("drop",e=>{//una vez que se suelta el archivo en elrectangulo se quedara con el color original
    e.preventDefault()
    changeStyle(e.srcElement,"#888")
    fileUpload(e.dataTransfer.files[0])//enviamos a la funcion el archivo que el usuario suelta en el rectangulo
    zone.style.border = "4px solid %888"
})


const changeStyle = (obj,color) =>{
    obj.style.color = color
    obj.style.border = `4px dashed ${color}`//cambiamos el color del borde dependiendo en que situacion este el archivo arrastrado

}

const fileUpload = (ar) =>{
  const reader = new FileReader()
    // reader.readAsText(ar)//leemos el archivo
    // reader.addEventListener("load",e=>{//le agregamos un evento al archivo
    //     document.querySelector(".result").textContent = e.currentTarget.result//y le agregamos al div con el nombre seleccionado (result) el contenido de text del archivo que se ha soltado en el rectangulo
    // })

    //Case Images
    // reader.readAsDataURL(ar)
    // reader.addEventListener("load",e=>{//le agregamos un evento al archivo
    //     let url = URL.createObjectURL(ar)
    //     let img = document.createElement("IMG")
    //     img.setAttribute("src",url)
    //     document.querySelector(".result").appendChild(img) //Creamos la imagen y la metemos dentro de img que anteriormente inicializamos. De esta manera podemos agregarle el hijo al div para que pueda agregar la imagen
        
    // })

    //Case Video
    reader.readAsArrayBuffer(ar)
    reader.addEventListener("progress", e=>{//vemos el progreso de lo que va a tardar en subir el video.
        let load = Math.round(e.loaded / ar.size)*100//de esta manera sacamos el "porcentaje" de carga del video que arrastramos (aunque es una estimacion sobre el peso) lo multiplicamos por 100 para tener numeros enteros.
        zone.textContent = `${load}%`
        document.querySelector(".loading-bar").style.padding = "75px 20px" //le agregamos el padding a la barra de cargar
        document.querySelector(".loading-bar").style.width = `${load/3.6}%` //le agregamos el width al porcentaje que nos marca cuanto le falta al video para estar cargado completamente
    })
    reader.addEventListener("loaded",e=>{//le agregamos un evento cuando haya finalizado de cargar
        changeStyle(zone,"#4f9")//cambiamos el color de la zona para que quede visualmente mas lindo
        zone.style.borderStyle = " solid"//de igual manera modificamos el border
        document.querySelector(".loading-bar").style.background = "#4f9"//y de igual manera modificamos el fondo
        setTimeout(() => {//agregamos un temporizador para que se efectuen los stylos modificados
            zone.style.color = "#fff"//cambiamos el color a blanco
            zone.style.animation = "appear 1s forwards"//le agregamos una animacion para que aparezcan las palabras de fin de carga
            zone.textContent = "!Carga Completa¡"//agregamos un texto de carga completa en la zona de arrastre.
        }, 5000);

    })
    reader.addEventListener("load",e=>{//le agregamos un evento al archivo
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type:'video/mp4'})//mediante el blob agregamos la url del video el cual contiene diferentes caracteres. se usa blob
        //en blob("lo primero es un array (en este caso lo transformamos al resultado.)","en este es el tipo de archivo (en este caso solamente aceptaremos video mp4)")
        let url = URL.createObjectURL(video)
        let img = document.createElement("IMG")
        img.setAttribute("src",url)//agregamos el atributo para buscar al archivo por su url
        document.querySelector(".result").appendChild(img) //Creamos la imagen y la metemos dentro de img que anteriormente inicializamos. De esta manera podemos agregarle el hijo al div para que pueda agregar la imagen
        img.onplay()//esto sirve para que una vez el video se cargue completamente se reproduzca automaticamente.
        
    })

}