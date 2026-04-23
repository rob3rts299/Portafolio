let nombres = ["pedro","franco","roberto","gabriel","pepe","mar","noah"]

document.write("array original: " + nombres + "<br><br>")
//-------transformadores
// let resultado = nombres.pop();//elimina el ultimo objeto dentro del array y lo muestra en pantalla
// let resultado = nombres.shift();//elimina el primer objeto dentro del array y lo muestra por pantalla
// let resultado = nombres.push("juan");//agrega un elemento al final de la lista y muestra la cantidad de elementos en el array
// let resultado = nombres.reverse();//invierte la posicion de los elementos del array 
// let resultado = nombres.unshift("juan","rocio");//agrega elementos al inicio del array y muestra la cantidad del nuevo array
// let resultado = nombres.sort();//ordena el array alfabeticamente
// let resultado = nombres.splice(2,3,"maria");//primero se coloca desde que punto del array queremos que empiece, segundo elimina los objetos que le indiquemos. y tercero podemos agregar elementos en la posicion que queramos (con el -1 lo colocamos al final pero hay que agregarlo posteriormente al ultimo elemento)
//--------accesores
// let resultado = nombres.join("<br> Elemento: ");//agrega los elementos que le colocamos como separadores de los objetos, pero la particularidad es que es una sola cadena de texto
// let resultado = nombres.slice(0,2);//primero selecciona desde que posicion se quiere que se devuelva el objeto, y segundo hasta que objeto se devolvera. Este no se tiene en cuenta
//--------de repeticion
// nombres.filter(nombres => document.write(nombres+"<br>"));//itera el array y muestra el valor de cada posicion. es una funcion flecha
let resultado = nombres.filter(nombres => nombres.length > 5); //la diferencia entre forEach es que filter puede poner condiciones para las iteraciones
// nombres.forEach(nombres => document.write(nombres+"<br>"));//es lo mismo que filter

document.write(resultado);
// document.write( "Elemento: " + resultado)
// document.write("<br> array resultado: " + nombres)