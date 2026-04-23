"use strict"

//**************IndexedDB**************
//Almacena informacion en el navegador de forma similar al localstorage
//Es orientada a objetos
//Es Asincrona
//Trabaja con eventos del DOM


const IDBRequest=indexedDB.open("database",1)//hay que solicitarle al navegador que nos habra una Base de Datos (DB)
//si le queremos poner nombre tendremos que comenzarlo con windows.indexedDB
//con el .open creamos o abrimos una base de datos ------ Primero verifica si existe, en caso contrario, crea una base de datos con ese nombre
//luego del nombre de la base de dato, nos pide la version de base de datos.

// console.log(IDBRequest)//nos muestra el prototype del indexedDBs en estado factory. Osea una fabrica de base de datos

IDBRequest.addEventListener("upgradeneeded",()=>{//Esto es en el caso de que la base de datos no este creada y la estemos intentando abrir
    const db = IDBRequest.result//le asignamos el resultado de la peticion a la base de datos. En todo caso si el resultado es correcto cuando se pide si la base de datos esta creada entonces no producira ningun problema
    db.createObjectStore("nombres",{//creamos un almacen de objetos(podemos entenderlo como tablal), mediante createObjectStores. seguido va el nombre del almacen de objetos que crearemos y la key
        autoIncrement: true//le ponemos el parametro autoIncremental porque cada key debe ser unica.
        //tambien podriamos hacer con keypath, es similar al autoincrement aunque posee algunas diferencias en el funcionamiento
    })
    //Recordar que este caso es cuando se crea la base de Datos. En caso de que haya una creada el almacen del objeto "nombres" no aparecera porque la Base de Datos que existia no la posee.
})

IDBRequest.addEventListener("success",()=>{//nos devuelve que todo salio correctamente. La llamamos y la pudimos abrir
    console.log("Todo salio Correctamente")
})

IDBRequest.addEventListener("error",()=>{//nos devuelve que Hubo algun problema con abrir la base de datos. 
    console.log("Hubo un error al intentar abrir la Base de Datos.")
})

const addObjects = obj =>{
    const IDBData = getIDBData("readwrite")
    IDBData[0].add(obj)
    IDBData[1].addEventListener("complete",()=>{
        console.log("Objeto agregado Correctamente.")
        //para agregar un objeto es tan simple con llamar la funcion addObjects({nombres: "Roberto"})
    })


    /**  const IDBData = getIDBData("readwrite","Objeto Agregado Correctamente.")
     * IDBData.add(obj)
    */
}


const readObjects = (obj) =>{
    const IDBData = getIDBData("readonly")
    const cursor = IDBData[0].openCursor()
    //forma extensa de hacer la lectura
    // const db = IDBRequest.result
    // const IDBtransaction = db.transaction("nombres","readonly")
    // const objectStore = IDBtransaction.objectStore("nombres")
    // const cursor = objectStore.openCursor()//abrimos el cursor para poder utilizarlo para marcar que variable vamos a leer
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            cursor.result.continue()
        }else console.log("todos los datos fueron leidos")//como siempre al final se va a ejecutar una vez mas. Y estara sin un dato el cual leer (Estara en estado NULL). Usamos el else para mostrarle que los datos fueron leidos correctamente.
    })

}

const modifyObjects = (key, obj) =>{
  
    const IDBData = getIDBData("readwrite")
    IDBData[0].put(obj,key)//verifica si existe un objeto con esa key y en tal caso lo modifica. En caso contrario lo crea
    IDBData[1].addEventListener("complete",()=>{
        console.log("Objeto modificado Correctamente.")
    })


      /**  const IDBData = getIDBData("readwrite","Objeto Nodificado Correctamente.")
       * IDBData.put(obj,key)
      */
}

const deleteObjects = key =>{

    const IDBData = getIDBData("readwrite")
    IDBData[0].delete(key)//verifica si existe un objeto con esa key y lo elimina
    IDBData[1].addEventListener("complete",()=>{
        console.log("Objeto Eliminado Correctamente.")
    })
    //se elimina el objeto con el key que se le adjudica, y no se recupera. aunque el indice sigue mostrandose de manera ascendente

    /**  const IDBData = getIDBData("readwrite","Objeto Eliminado Correctamente.")
     IDBData.delete(key)
    */


}
/**getIDBData = (mode,msg)*/
const getIDBData = mode =>{
    const db = IDBRequest.result
    const IDBtransaction = db.transaction("nombres",mode)//se abre la posibilidad para hacer cualquier tipo de transaccion, y la abrimos en el objectStore que se crearon.
    //readwrite -----> Permite leer y escribir en la base de datos/cuando se tiene que modificar la BD usar este metodo.
    //readonly -----> Permite solo leer en la base de datos
    const objectStore = IDBtransaction.objectStore("nombres")//es indicar el lugar donde se ejecutara. Dandole permiso para ejercutarse en el objectoStore.
    //de esta manera la transaccion ya esta abierta.
    return [objectStore, IDBtransaction] 



    /*IDBtransaction.addEventListener("complete",()=>{
        console.log(msg)
    })*/

    // return objectStore     //** solamente retornamos el objectoStore*/
}

/** optimizacion del codigo*/