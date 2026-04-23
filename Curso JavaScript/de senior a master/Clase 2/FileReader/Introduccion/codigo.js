"use strict"

const archivo = document.getElementById('archivo')
archivo.addEventListener("change",(e)=>{
    // leerArchivo(archivo.files[0])//ahi le esta mandando un solo archivo. Le ponemos 0 porque es el primer archivo del arreglo, debido a que si le ponemos el atributo multiple al input se pueden mandar varios archivos
    leerArchivo(archivo.files)//lee multiple archivos.
})

// console.log(reader)//es un archivo que no nos brindara ningun valor porque es un archivo creado para actuar cuando se trabaja con eventos.

const leerArchivo = ar =>{

//     const reader = new FileReader()//inicializamos la API FileReader
//     reader.readAsText(ar)//mediante el readAsText leemos el archivo que le ingresemos a la funcion
//     reader.addEventListener("load", (e)=> {console.log(e)//y por ultimo le agregamos un evento para mostrar el archivo que se ha leido

//     console.log(JSON.parse(e.currentTarget.result))    //convertimos el resultado de Archivo, que es un JSON y lo leemos

// })

//*******Lee multiple archivos*******

//     for (var i = 0; i < ar.length; i++) {//mediante un bucle for, leemos todos los archivos que el usuario ingrese.
//         const reader = new FileReader()
//         reader.readAsText(ar[i])
//         reader.addEventListener("load", (e)=> {
//             console.log(JSON.parse(e.currentTarget.result))
//         })
//     }//se usa el mismo procedimiento que en el caso de un solo archivo.

// }


//************Lee imagenes y videos************

for (var i = 0; i < ar.length; i++) {//mediante un bucle for, leemos todos los archivos que el usuario ingrese.
    const reader = new FileReader()
    reader.readAsDataURL(ar[i])
    reader.addEventListener("load", (e)=> {
        let newImg = `<img src='${e.currentTarget.result}'>`
        document.querySelector(".result").innerHTML += newImg
    })
}//se usa el mismo procedimiento que en el caso de un solo archivo.

}