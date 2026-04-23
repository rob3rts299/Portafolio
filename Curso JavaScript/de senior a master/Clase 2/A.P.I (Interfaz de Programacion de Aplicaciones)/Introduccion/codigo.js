"use Strict"

const fecha = new Date()//date es un constructor podemos demostrarlo tan simple como usar el metodo .__proto__
//con el uso de new ahora podemos trabajos con el metodos y propiedad que en caso contrario no era posible.

// const fecha = new Date(100000000000000)//al agregarle parametros al date se va cambiando el año, dia y mes.
//esto es asi porque se usa el unix time
//unix time: el tiempo en milisegundos que paso desde el 00:00:00 del 1 de enero de 1970. Al agregarle 000 se incrementa de manera exponencial
//lo que nos indica es la cantidad de mili-segundos que paso desde el 1 de enero de 1970 hasta la fecha que nos muestra.
// const fecha = new Date(2024,3,1)// de esta manera podemos seleccionar un dia del año y del mes que coloquemos.
// console.log(fecha)

// console.log(fecha.getDate())//nos devuelve el dia del mes en que estamos.
// console.log(fecha.getDay())//nos devuelve el dia de la semana en que estamos
// console.log(fecha.getMonth())//nos devuelve el mes que estamos
// console.log(fecha.getYear())//nos devuelve el año actual pero restandolo 1900. (2024 - 1900 = 124)
// console.log(fecha.getHours())//nos devuelve la hora del dia en que estamos hoy
// console.log(fecha.getMinutes())//nos devuelve los minutos del dia en que estamos hoy
// console.log(fecha.getSeconds())//nos devuelve los segundos del dia en que estamos hoy
// console.log(Date.now())//Nos muestra la cantidad de mili-segundos que pasaron hasta hoy

// const fecha2= new Date(1709334582577)
// Date.now()
// console.log(fecha2)//de esta manera corroboramos que estamos en la fecha del dia de hoy visto el video (1 de marzo de 2024)


//**************************reloj practica**************************

// const addzeros = n =>{
//     if (n.toString().length < 2) return "0".concat(n)//de esta manera nosotros condicionamos a la variable para que en los casos que no tenga dos numeros le agregemos un 0 y lo concatenamos para no alterar el style de la pagina
//     return n
// }

// const updateHours = ()=>{
//     const time = new Date()
//     let hours = addzeros(time.getHours()) 
//     let minutes = addzeros(time.getMinutes()) 
//     let seconds = addzeros(time.getSeconds()) 

//     document.querySelector(".hours").textContent = hours
//     document.querySelector(".minutes").textContent = minutes
//     document.querySelector(".seconds").textContent = seconds
// }
// updateHours()

// setInterval(updateHours,1000)//mediante el set interval vamos actualizando la hora cada 1 segundo. asi no quede un numero congelado. Cabe aclarar que en la actualidad ya no se usa set interval para hacer un prototipo de reloj.

