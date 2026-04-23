// let objeto = {
//     "propiedad": "datos"
// }

// // let variable = "string"

// let variable = ["pedro",213,null]//este array sirve para explicar bien lo que significa prototype. la cantidad de elementos que posee es la unica propiedad que posee el array, todos los metodos que se obtienen por el proto. SON TODOS HEREDADOS POR ELPROTOTYPE

// console.log(objeto)//todos los prototipos tienen el prototipo object. (En este casao prototype o proto, es el padre)
// console.log(variable.__proto__)//de esta manera nosotros podemos accedes al prototipo aunque sea una cadena de texto, numeros, etc. en JS Todo es un objeto

// //Todos los datos heredan dos prototipos, El tipo de dato. y el prototipo object. por ejemplo: "variable" hereda el tipo de dato string. Y asu vez hereda el prototipo object


// let funci = function(){}//de esta manera se crea el prototipo a diferencia de la sdemas variables que heredan el prototipo

// console.log(funci.prototype)//en este caso podemos hacer uso de prototype porque al usar una funcion esta funcion crea un prototipo a diferencia de lo que hacen las variables que no crean el prototipo



// class objeto{
//     constructor(){}
//     hablar(){
//         console.log("hola")
//     }
// }

// const objet = new objeto()

// objet.hablar = () =>{
//     console.log("modificado afuera")
// }//aca no estamos modificando el metodo. lo unico que estamos haciendo es agregarle unos lineas de codigo mas.

// objet.__proto__.hablar = () =>{
//     console.log("modificado afuera")
// }//la forma para modificar un metodo del prototipo es ingresando mediante el .__proto__
// // console.log(objet)//este objeto en realidad se esta heredando, aunque parezca que lo estamos creado al momento de comprobarlo con .prototype saldra undefined. Lo estamos heredando y modificando
// // console.log(objet)

// // objet.hablar()//primero se ejecutan las funciones que estan adentro (los metodos normales), y despues se ejecutan los que estan adentro del prototipo 

// //escribir un proto herendandolo

// let arr = []

// // arr.__proto__ = objet//de esta manera el array toma el metodo de hablar del prototipo. MUY IMPORTANTE
// arr.__proto__ = objet//de esta manera se mostrara "hola" porque le indicamos que tome el metodo del prototipo
// // arr.hablar()//hereda el "modificado afuera" porque es lo primero que encuentra en caso de que no encuentre nada. Tomara o heredara lo del prototipo.

// arr.hablar()



//*********************Use Strict *************//

// "use strict"//para activar el modo estricto de manera global se lo tendria que poner arriba de todo. Tambien se puede poner dentro de funciones

// nombre = "lucas"//al no estar declarada la variable con algunas de las 3 opciones (var, let, const) Nos saldra un error.

// console.log(nombre)

// const obj = {}

// Object.defineProperty(obj,'nombre',{value:"pedro",writable:false})//writable es una propiedad que señala que esta funcion o propiedad no se puede reescribir

// obj.nombre = "roberto"//esta linea de codigo es un error del programador porque no se puede realizar, en el JS normal el error no se muestra pero tampoco se cambia el resultado. En el modo estricto si muestra el error

// console.log(obj.nombre)

// const obj = {nombre:"lucas"}

// Object.preventExtensions(obj)//se prohibe que se permitan nuevas propiedades

// obj.apellido = "dalto"//este de nuevo es un error del programador que en el JS no se mostrara el error. Pero en el modo estricto si se muestra el error

// console.log(obj.nombre)

// const str = "locaaaaa"

// str.canal = "daltito"//no se puede agregar una propiedad a un string.

// console.log(str)//en esta caso nos saldra error en el modo estricto. en el JS normal mostrara el string.

// function hablar(texto,texto){//con el modo estricto (use strict) no permite poner dos parametros iguales. para usarlo hay que sacar el doble parametro y dejar solo 1
//     console.log(texto)
// }

// hablar("pedro","pedro")//si le pasamos estos dos valores que son iguales siempre toma el ultimo. En caso de tener solo 1 saldra un error de undefine

// const obj = {
//     nombre : "lucas"
// }

// delete obj.nombre//delete solamente elimina propiedades y objetos. NO ELIMINA VARIABLES Y NO ELIMINA FUNCIONES.

// console.log(obj.nombre)

// let package = "pedro"//con el modo estricto no se puede usar palabras reservadas como variables. Saldra un error. En el caso de JS normal esto se ejecuta sin problema

// console.log(package)

// function saludar(){
//     this.nombre="pedro"//como el this no existe, entonces para la logica quedaria undefine.nombre (lo cual seria un error)
//     this.saludar = function(){
//         console.log(`hola ${this.nombre}`)//en este caso usando el modo estricto el .this se elimina como tal y no funcionara
//     }
// }

// obj = new saludar()//y tambien usando el modo estricto el new tampoco funciona. De tal manera se deberia eliminar
// obj.saludar()

// console.log(0o23)//para poder usar los valores octales, en el modo estricto hay que poner el 0 y posterior la o (ejemplo: 0o23). En tal caso no funcionaria. Y tambien no se puede usar width en el modo estricto

// arguments = "hola"//no se puede usar arguments en el modo estricto
// eval = "hola"// no se puede usar eval en el modo estricto. 

// console.log(eval)

nombre = "lucas"//al no tener el modo estricto esta variable se puede dejar en estado de no definida

function decir(){//cuando entra a la funcion la variable nombre ya esta definida como var.
    "use strict"
    let apellido = "dalto"//como esa el modo estricto dentro de la funcion todas las variables que se coloquen se tienen que definir. y todas las demas consideraciones en el uso del modo estricto
    console.log(nombre)
    console.log(apellido)
}

decir()

//IMPORTANTE USE STRICT SOLAMENTE FUNCIONA CUANDO ES EL PRIMER CODIGO O LINEA DE CODIGO QUE LEE EL PROGRAMA. EN CASO CONTRARIO NO FUNCIONARA USE STRICT