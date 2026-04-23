"use strict"


console.log(history)//muestra el prototipo de la API history
console.log(history.length)//muestra la cantidad de rutas posible para viajar por el historial.

history.back()//es un metodo que vuelve a la pagina anterior a la que nos encontremos.
history.forward()//es un metodo que va hacia delante (si es que no es la ultima pagina a la que visitamos) de la pagina a la que nos encontremos.

// history.go(0)//este metodo nos recarga la pagina
// history.go(1)//este metodo va a la pagina siguiente que hayamos visitado a menos que sea la ultima
// history.go(-1)//este metodo va a la pagina anterior que hayamos visitado a menos que sea la primera.

console.log(location.href)//muestra la url de la pagina.

console.log(history.state)//en este caso no se mostrara ningun valor porque la pagina pura no posee ningun objeto dentro
history.pushState({nombre:"pedro"},"","?jajaja")//agrega una nueva entrada en el historial, si creamos varias y volvemos a la pagina anterior veremos que se guardaron las busquedas. o estaran guardadas en el historial
//data ======> es un objeto/nombre o cualquier cosa.
//titulo ======> es el titulo de todo. por ejemplo windows.titulo
//url ======> es la url, es lo que se le agrega a la url
history.pushState({nombre:"pedrolingooo"},"","?jajaja")
history.pushState({nombre:"pedrozasoo"},"","?jajaja")

console.log(location.href)

console.log(history.state)//muestra el valor o objeto que posee la entrada una vez se lo agregamos con el pushState. 

addEventListener("popstate",(e)=>{
   console.log(e.state)//señala el estado actual en que estamos en la pagina. En este caso es pedro y dependiendo del estado que se agregue este mismo cambiara.

})

history.replaceState({nombre:"pedro"},"","?jajaja")//no detecta ninguna de los otros objetos que pueden llegar a asignarle
//por ejemplo con el popstate se puede agregarle entradas al historial con distintos nombres. en cambio, en el replaceState no se agregan mas entradas con los diferentes nombres se queda con la ultima agregada.