
// const saludar = () =>nombre="pedro" //si las funciones flechas poseen una sola linea. Como se muestra en el ejemplo retornaran lo que tenga esa linea (En caso de devolver algo). En caso contrario devuelve undefine
// // const saludar = () =>{nombre="pedro"}//si se pone el cuerpo normal de la funcion. Esto ya no funcionara
// const saludar1 = res => nombre=res // si posee solamente un parametro. Se le puede sacar los parentesis.
// resultado = saludar1("hola dalto")


// console.log(resultado)


"use strict"

// const obj ={
//  nombre: "lucas",
// //  saludar : function (){console.log(`Hola ${this.nombre}`)}//this lo que hace es hacer referencia al objeto windows
//  saludar :  ()=>{console.log(`Hola ${this.nombre}`)}//en este caso this no funciona con las funciones flechas. Porque this se refiere al objeto que esta llamando al objeto que esta llamando a la funcion. (dicho de otra manera en las funciones flechas this llama al objeto que llama la funcion en este caso windows)
// //no se recomienda usar funciones flechas como metodo por el hecho de que cuando nosotros estamos accediendo al this. Esto no hace referencia al objeto que esta llamando la funcion sino que hace referencia al this que esta llamando al objeto que esta llamando a la funcion.
// }

// window.nombre="robertt"//con esto corroboramos que esta llamando a window. 

// obj.saludar()

// function construirPersona (nombre,apellido){
// this.nombre = nombre
// this.apellido = apellido
// }
// const construirPersona = (nombre,apellido) =>{// las funciones flechas no pueden ser constructores.
//     this.nombre = nombre
//     this.apellido = apellido
//     }
    

// const persona = new construirPersona("lucas","dalto")

// console.log(persona)

// console.log(this === window)//si al this lo uso afuera de cualquier funcion siempre es WINDOWS
// this.nombre = "robert"
// console.log(window.nombre)//comprobacion de que windows es estrictamente lo mismo que this (si no esta dentro de una funcion)

function saludar(){
    console.log(`hola ${this.nombre}`)//this con la funcion normal se crea y se usa en este bloque o hace referencia a ese bloque
}
this.nombre = "robert"//no funciona porque en el modo estricto, se prohibe que window sea contenedor de todo objeto que no tenga un parametro. 

// const objeto = {
//     nombre: "lucas",
//     saludar//de esta manera la funcion saludar me nombraria lucas. Que es el nombre dentro de la funcion. Si se usa una funcion flecha haria referencia a window y nos mostraria "robert"
// }

const objeto = {
    nombre: "lucas",
    saludar: () =>{
        console.log(`hola ${this.nombre}`)//en este caso EL THIS de la funcion flecha hara referencia a otro context(). Porque es el que le sigue antes de llegar a window
    }}

function otroContext(){
    nombre="roberto"
    objeto.saludar()

}
otroContext()
//si se planea usar metodos se recomienda usar funciones simples
// objeto.saludar()