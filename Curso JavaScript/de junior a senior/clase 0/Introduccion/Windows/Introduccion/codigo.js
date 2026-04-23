
let youtubeURL = "https://youtube.com"

let ventana = window.open(youtubeURL)// abre una nueva pestaña de internet. Entre parentesis se coloca la url de la pestaña

ventana.close()//cierra la ventana que se encuentre abierta

// console.log(ventana.closed)//lo que hace es verificar si la ventana esta cerra. Si esta cerrada devuelve true en caso contrario devuelve false

// ventana.stop()//hace que se detenga la carga de la pagina.

// // alert("holiwissss")//envia una señal de alerta con lo que este escrito entre parentesis

// // print()//nos deja imprimir lo que este en la pagina web

// // prompt("dame un dato")//pide un dato al usuario y lo tranforma a string. Toma el dato para poder hacer alguna operacion con El.

// let confirms = confirm("Estas seguro de que quieres salir del sitio web?")//Da a elegir entre dos opciones. Si se acepta Devuelve true. Si se cancela devuelve false

// console.log(confirms)


//***********SCREEN***********//

// const screen = window.screen

// console.log(screen)//muestra todas las propiedades de screen. Este devuelve toda las propiedades de la pantalla
// document.write(screen)//para que se pueda mostrar hay que especificarle la propiedad, por ejemplo: screen.availHeight. Sin propiedad demuestra el tipo de estructura.

// const screenLeftt = window.screenLeft//mide la distancia entre borde izquierdo de la ventana, con el borde izquierdo de la pantalla
// const screenTopp = window.screenTop//mide la distancia entre borde superior de la ventana, con el borde superior de la pantalla
// document.write(`left: <b>${screenLeftt}</b><br>
//                  top: <b> ${screenTopp}</b>
//                  `) //muestra la distancia que se encuentra en cada punto. Visualmente se puede comprobar poniendo la ventana en modo chico y mover la pantalla.


// const scrollX = window.scrollX//devuelvo cuanto se desplazo la pantalla de manera horizontal.
// const scrollY = window.scrollY//devuelvo cuanto se desplazo la pantalla de manera vertical.
// alert(scrollY)

// window.scroll(0,200)//señala o envia, una serie de coordenadas para dejar a la pagina una vez se cargue

// ventana.resizeTo(100,200)//minimiza la pestaña en las dimensiones especificadas.
// ventana.resizeBy(100,200)//minimiza la pestaña en las dimensiones especificadas la diferencia es que el resizeTO es relativo

// ventana.moveTo(100,540)//mueve la pestalla a las dimensiones especificadas
// ventana.moveBy(100,540)//mueve la pestalla a las dimensiones especificadas la diferencia con moveTo es que ese es relativo. y moveBy es absoluto.


//location//

// const href = window.location.href//devuelve la localicacion en la cual se encuentra el archivo. Dicho de otro modo devuelve la ruta del archivo.
// const href = window.location.hostname//devuelve el nombre de hostname. o la direccion de este ultimo
// const href = window.location.pathname//devuelve todo lo que este luego del dominio. para poder encontrar la ruta en la cual estoy posicionado.
// const href = window.location.protocol//nos devuelve el protocolo de la pagina, si es un sitio web seguro sera https en caso contrario es http
// const href = window.location.assign("https://google.com")//carga un nuevo documento. en este caso pedimos que cargue google.

document.write(href)