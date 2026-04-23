
console.groupCollapsed("1ra etapa de console.")
console.assert(5 > 7)//verifica si la condicion dentro del parentesis en verdadera sino tira error.

// console.clear()//borra la consola. o limpia la consola

console.error("locooooo")//muestra un error. desde la consola.

console.info("esto es una informacion")//agrega o hace un comentario en donde se lo coloca. msj de informacion

// console.log()//mensaje de depuracion a diferencia del console.info

console.table([3,2,1,4,2,1,2])//primero debe ser un array o un objeto para que tenga sentido. Nos muestra una tabla del array

console.warn("estimado usuario, tenga cuidado con los valores que coloque")//señala una advertencia en el codigo.

console.dir([1,2,3,4,44,2])//nos muestra un array de una forma diferente mostrado con el .info y nos agrega mucha mas informacion 

console.info([1,2,3,4,44,2])//esto es el array de modo informativo
console.groupEnd()//finaliza el grupo 
//-------------funciones de conteo
console.groupCollapsed("grupo console funcion de conteo")//crea un grupo
console.count()//indica cuantas veces se ejecuta una funcion
console.count()
console.count()
console.countReset()//esto resetea el conteo
console.count()
console.groupEnd()

//-------------Funciones de agrupacion
console.groupCollapsed("grupo 2 funcionalidad de agrupacion")//misma funcionalidad de group la diferencia es que lo muestra cerrado
console.log("esta informacion no se ve amenos que abras el group")
console.groupEnd()


//-------------Funciones de temporizacion
console.groupCollapsed("funcion de temporizacion")
console.time()//inicia un contarizador

console.log("haciendo tiempo...")

console.timeLog()//muestra el tiempo que va pasando desde que se inicio time

console.timeEnd()//finaliza el conteo de la funcion time

console.timeLog()//verificamos que se haya cerrado la funcion time

console.groupEnd()

console.groupCollapsed("formas de agregarle color a los textos en linea")
console.log("%choliwisssss","color:red;padding:20px;background:black")//permite modificar un poco de css en texto en linea. pero posee limitaciones

