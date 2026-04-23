
// let nombre = "jorge"//el flujo de eventos es aquel que dictamina como se ejecutaran las sentencias. El orden del programa

// {
//     let nombre = "pedro"
//     alert(nombre)
// }//sentencia de bloque, crea un nuevo ambito de variable

// alert (nombre)

// if(3>2){
//     alert("es ciertoooo")
// }//los if, como cualquier otro condicional son los que controlan el flujo de eventos

// let fruta = "manzana"

// switch (fruta){
//     case "banana":
//         console.log("esto es una BANANA")
//         break
//     case "manzana":
//         console.log("esto es una MANZANA")
//         break
//     case "pera":
//         console.log("esto es una PERA")
//         break
//     default: 
//         alert("No es ninguna")
// }


//*************Manejo de Excepciones de Errores*********//

try {
    console.log("no hay error")
    // asdasdas
} catch (error) {
    console.log(typeof error)//podemos saber que el error es un object.
    console.log("ha ocurrido un error")//Este es un tipo de catch incondicional.
    if(3>5){
        console.log("esta el error")
    } else console.log("Esta mallllll")//Esto es un tipo de catch condicional.
} finally{
    console.log("Esto siempre se ejecutara")//El finally hace que el bloque que contiene se ejecutite haya error o no
}

// const pruebaTry = () =>{
//     try {
//         return 1
//     } catch (e) {
//         return 2
//     }finally{
//         return 3
//     }
// }

// console.log(pruebaTry())//aca se verificaa que el finally es superior a todoo, y sobreescribe los valores retornados anteriormente.

try {
    // throw "Esto provoca un error"//Ejecuta una excepcion de error, y Hace saltar el msj de error
    throw {
        error: "Error",
        info: "Estoy provocando un error, salu2"
    }//de esta forma podemos provocar error con forma de objetos; SE pueden lanzar hasta un array.
} catch (e) {
    console.log(e)
}

//Depuracion de codigo: Proceso por el cual depuramos el codigo, corregimos errores y solucionamos los bug/errores. Para que quede mas lejible el codigo

