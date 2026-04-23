// example
"strict mode"

// const AgeValid = (msg) =>{//Funcion Recursiva

//     let age
//     try {
//         if (msg) age = prompt(msg)//pregunta la edad
//     else age = prompt("Introduzca su edad")//Tomamos el valor de la edad mediante la funcion prompt
//     age = parseInt(age)//transformamos a entero
//     if (isNaN(age)) throw "Introduce un numero, para tu edad"//corroboramos que el valor es un numero
//     if (age > 18) console.log("Sos mayor de edad")//Comparamos la edad para saber si es mayor
//     else console.log("Sos menor de edad")//Comparamos la edad para saber si es menor
//     } catch (e) {
//         AgeValid(e)//en caso de que haya un error volvemos a llamar a la funcion con el e, Usando Recursividad
//     }
// }

// AgeValid()

//Clausulas

// const saludar = (nombre) =>{//una funcion recursiva para saludar a la persona una vez que se recarga la pagina
//     return function(){
//         console.log("hola " + nombre)
//     }
// }

// let saludo = saludar("pedro")

// addEventListener("load",saludo)//agregamos el evento de saludo, y le agregamos el valor o la "persona" a la cual va a saludar

//Ejemplo sin clausula practica

// const changeSize = (size) =>{
//     document.querySelector(".tex").style.fontSize = `${size}px`//mediante el document. nos podemos ubicar en la clase del text y cambiarle el stylo en este caso es el tamaño

// }

// document.querySelector(".t12").addEventListener("click",()=>changeSize(12))//y de la misma manera seleccionamos la class de los buttons para poder agregarle un evento de click para poder cambiar el tamaño del texto
// document.querySelector(".t14").addEventListener("click",()=>changeSize(14))
// document.querySelector(".t16").addEventListener("click",()=>changeSize(16))

//****************************Ejemplo con clausula practica************************************************

// const changeSize = size =>{//para usar la clausula siempre hay que sacar los parentesis y poner el return
//     return () =>{
//     document.querySelector(".tex").style.fontSize = `${size}px`//mediante el document. nos podemos ubicar en la clase del text y cambiarle el stylo en este caso es el tamaño
//     }
// }

// let px12 = changeSize(12)//a diferencia del ejemplo anterior aca le asignamos el cambio de tamaño a una variable
// let px14 = changeSize(14)
// let px16 = changeSize(16)
// document.querySelector(".t12").addEventListener("click",px12)//y de la misma manera seleccionamos la class de los buttons para poder agregarle un evento de click para poder cambiar el tamaño del texto
// document.querySelector(".t14").addEventListener("click",px14)//le asignamos las variables en vez de la funcion flecha
// document.querySelector(".t16").addEventListener("click",px16)

//************************Parametros por defecto*************************

// const suma = (a=0,b=0)=>{//una forma de solucionar el problema de que se envie un solo valor, y evitar el nan es asignarle los valores a los argumentos
//     console.log(a+b)
// }

// const suma = (frase,...num) =>{//mediante la utilizacion del ... seguido de un nombre, la funcion espera un array, y de esta manera utilizamos todos los argumentos que el usuario nos pase 
//     //ahora se usa parametro rest. Que es agregar un parametro primero y al ultimo rest.
//     let result = 0
//     for (let i = 0; i < num.length; i++) {
//         result += num[i];
//     }//una forma simple de acumulacion/sumatorio de numeros
//     console.log(`${frase} ${result}`)//usamos template para evitarnos cualquier tipo de error por tema de typeo o correlacion

// }

// suma ("pedro",10,25,99)//le agregamos los argumentos que querramos


//**********************Operadores ternario**********************

// let age = 17
// //Forma tradicional de hacer la una funcion condicional
// if (age > 18) {
//     console.log("es mayor de edad")
//     console.log("puede pasar")
// }
// else console.log("Es menor no puede pasar")

// //forma de una funcion condicional mediante operadores ternarios
// (age > 18)  ?   ( //funciona usando menos recursos que el if
//                 console.log("es mayor de edad"),
//                 console.log("puede pasar"))
//             :   (
//                 console.log("Es menor no puede pasar")
//             )


//******************Operador Spread (parametro Rest)******************

// let valor1= "valor 1"
// let valor2= "valor 2"
// let valor3= "valor 3"

// let arr=["valor 1","valor 2","valor 3"]

// console.log(valor1,valor2,valor3)
// console.log(...arr)//una buena forma de demostrar la utilidad del operador spread a ahorrarnos el typeo de los valores dentro de un array y mostrando el mismo resultado

let arr = ["pera","manzana","banana"]
let arr2 = ["kiwi","naranja","kiwi","naranja","kiwi","naranja","kiwi","naranja","kiwi","naranja"]

let arr3 = [...arr,...arr2]//manera de concatenar un array usando los operadores spread

// arr.push(arr2[0],arr2[1])//en array chicos no pasara nada pero en caso de arrays mas largos se complicara la incorporacion de estos mismos
arr.push(...arr2)//manera de solucionar el problema de incorporar valores de un array dentro de otro array
console.log(arr3)

const sumar = (num1, num2) =>{
    console.log( num1 + num2)
}

arr4 = [3,9]

sumar(...arr4)//es parecido al parametro rest, aunque en este caso el operador iria en el argument
// sumar(arr4[0],arr4[1])//una forma mas familiar de ver que es lo que se esta enviando como argumento