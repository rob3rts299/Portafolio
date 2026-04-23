"use strict"

const IDBRequest=indexedDB.open("database",1)


IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
  })

  IDBRequest.addEventListener("success",()=>{
        readObjects()//cada vez que se cargue la pagina se leeran todos los objetos que se tiene en la BD
})

IDBRequest.addEventListener("error",()=>{
        console.log("Hubo un error al intentar abrir la Base de Datos.")
})

document.getElementById('add-button').addEventListener("click",()=>{
    let name = document.getElementById("name").value//toma el valor que se encuentra en el input y le asignamos a una variable para poder realizar la comprobacion del nombre y mostrarla
    if (name.length > 0) {//verificamos que no lo haya enviado vacio
        if (document.querySelector("possible") != undefined) {
            if (confirm("Hay elementos sin guardar quieres: ¿Quieres continuar?")) {
                
            addObjects({nombres:name})//en VSC o JavaScript si la variable tiene el mismo nombre que el agregado entonces se puede dejar con el mismo valor
            readObjects()
            }else{
                
            addObjects({nombres:name})//en VSC o JavaScript si la variable tiene el mismo nombre que el agregado entonces se puede dejar con el mismo valor
            readObjects()
            }
        }
    }
})


const addObjects = obj =>{

    const IDBData = getIDBData("readwrite","Objeto Agregado Correctamente.")
     IDBData.add(obj)
    
}

const readObjects = (obj) =>{
    const IDBData = getIDBData("readonly")
    const cursor = IDBData.openCursor()
    const fragment = document.createDocumentFragment()//creamos el fragmento
    document.querySelector(".names").innerHTML=""
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            let element = nameHTML(cursor.result.key,cursor.result.value)//creamos una variable y le asignamos la funcion nameHTML. El cual le pasamos el key y el nombre que se mantienen guardados en la indexedDB del la pagina web
            fragment.appendChild(element)
            cursor.result.continue()
        }else document.querySelector(".names").appendChild(fragment)
        })

}

const modifyObjects = (key, obj) =>{
  

        const IDBData = getIDBData("readwrite","Objeto Nodificado Correctamente.")
       IDBData.put(obj,key)
      
}

const deleteObjects = key =>{

    const IDBData = getIDBData("readwrite","Objeto Eliminado Correctamente.")
     IDBData.delete(key)

}

const getIDBData = (mode,msg) =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres",mode)
     const objectStore = IDBtransaction.objectStore("nombres")

    IDBtransaction.addEventListener("complete",()=>{
        console.log(msg)
    })

    return objectStore     
}

const nameHTML = (id,name) =>{
    //creamos variables y le asignamos los valores correspondientes a nuestro html para poder hacer el cuerpo, o ubicarlos en la pagina
    const container = document.createElement("DIV")
    const h2 = document.createElement("h2")
    const options = document.createElement("DIV")
    const saveButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    
    //Le agregamos las clases correspondientes para que tomen los estilos creados en el css
    container.classList.add("name")
    options.classList.add("options")
    saveButton.classList.add("impossible")
    deleteButton.classList.add("delete")

    //le damos el texto correspondientes a los botones y al h2
    saveButton.textContent = "Guardar"
    deleteButton.textContent = "Eliminar"
    h2.textContent = name.nombres

    h2.setAttribute("contenteditable","true")//le agregamos ese atributo que nos permite modificar el valor (nombre)
    h2.setAttribute("spellcheck","false")//le quitamos el auto-corrector

    //creamos los hijos de las variables
    options.appendChild(saveButton)
    options.appendChild(deleteButton)

    container.appendChild(h2)
    container.appendChild(options)

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("impossible","possible")//reemplazamos la clase de impossible a possible cuando se apreta sobre el titulo
    })

    saveButton.addEventListener("click",()=>{
        if(saveButton.className=="possible"){//verificamos si el boton de guardado posee una clase que tiene el nombre de possible
            modifyObjects(id,{nombres: h2.textContent})//le mandamos para modificar la key del objeto, y el nombre del objeto
            //como es un objeto. Lo tenemos que enviar como tal por eso mismo esta encerrado entre llaves.
            saveButton.classList.replace("possible","impossible")//reemplazamos la lista que tendra el boton para que ya no se muestre como que puede guardar algo
        }
    })

    deleteButton.addEventListener("click",()=>{
        deleteObjects(id)//lo borramos de la base de datos
        document.querySelector(".names").removeChild(container)//seleccionamos el documento con la clase .names y le removemos el hijo container para borrar todo
    })

    return container//retornamos el usuario que se encuentre guardado en la BD

}

