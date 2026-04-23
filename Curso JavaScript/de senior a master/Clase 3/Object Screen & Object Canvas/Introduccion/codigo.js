"use strict"

//**********propiedades del screen**********
//ctrl + shift + R ====> Borramos cache
const Anchototal = screen.width //ancho total de la pantalla
const Alturatotal = screen.height //altura total de la pantalla

const AnchoDisponible = screen.availWidth //ancho disponible de la pantalla
const AlturaDisponible = screen.availHeight //ancho disponible de la pantalla

const Resolucion = screen.pixelDepth //resolucion de color de pantalla
const Profundidad = screen.colorDepth //profundidad de bits de la paleta de colores

console.log(`width: ${Anchototal}`)
console.log(`height: ${Alturatotal}`)

console.log(`availwidth: ${AnchoDisponible}`)//muestra el ancho total de la pantalla que se tiene disponible. en caso de tener la barra de tareas siempre activa y ubicada a la izquierda o derecha de la pantalla, se restaran los pixeles que ocupa mantenerla visible
console.log(`availheight: ${AlturaDisponible}`)//muestra la altura total de la pantalla que se tiene disponible. en caso de tener la barra de tareas siempre activa y ubicada arriba o abajo de la pantalla, se restaran los pixeles que ocupa mantenerla visible

console.log(`pixelDepth: ${Resolucion}`)
console.log(`colorDepth: ${Profundidad}`)


//**********canvas**********
//por defecto posee width 300px y un height de 150px; Si se modifica el canvas desde el css se cambia la escala. Si se quieren cambiar la escala es preferible darselo desde html para no cambiar la escala y meterse con funciones en css

const canvas = document.getElementById('canvas')//de esta manera seleccionamos al objeto canvas
const dif = canvas.getBoundingClientRect()//ofrece propiedades que permite conocer cuanta distancia hay entre el "top" de la pantalla y el elemento y entre el "left" de la pantalla y el elemento
const ctx = canvas.getContext("2d")//puede ser un contexto 3d por lo que posee mucha capacidad. los graficos se construyen sobre el contexto

// //parametros que se definen antes de la creacion del rectangulo para que puedan cambiarse o aplicarse los estilos.
// ctx.strokeStyle="#48d";//primero se define el stylo este cambia el color al strokerect.
// ctx.lineWidth = "4"//cambia el grosor de la linea que crea el rectangulo.

// ctx.strokeRect(50,0,500,300)//el primer valor es el "Left" y segundo valor es el"top". Para usar de comparacion: "X;Y"
// //y de segundo valor se les dan las medidas que tendran. Primero "width", segundo "height"

// ctx.fillStyle="#a32";

// ctx.fillRect(20,30,300,200);//crea un "cuadrado" con los parametros que le asignemos, la asignacion de los parametros es identica al strokeRect

// ctx.lineTo(100,200)//creamos un punto en el canvas. Y le pasamos las coordenadas en las cuales vamos a ubicar este punto
// ctx.lineTo(150,280)//creamos un punto en el canvas. Y le pasamos las coordenadas en las cuales vamos a ubicar este punto
// //para crear una linea entonces hay que unir estos dos puntos que creamos. y lo hacemos mediante el comando stroke
// ctx.stroke()
// ctx.closePath();//debemos cerrar el path. porque sino quedara vinculado el ultimo lugar donde se puso un punto y en el caso e querer hacer una linea nueva se comenzara desde ahi
// ctx.beginPath();//luego de cerrar el path. para hacer una linea nueva hay que volverlo a abrir
// ctx.lineTo(40,90)
// ctx.lineTo(200,290)
// ctx.stroke()//y se vuelven a poner otras coordenadas para hacer la linea

// ctx.arc(120,150,50,102,120)//primero va la X, luego la Y, el tercer valor es el Radio. Y los demas parametros a investigar.
// ctx.stroke()

let painting = false//cuando apretemos el click tiene que ser true
let color,linewidth,difX,difY;

canvas.addEventListener("mousedown",e=>{
    difX =e.clientX - dif.left//devuelve la coordenada en el eje x
    //con la resta calculamos la diferencia que existe entre el canvas y la pantalla
    difY =e.clientY - dif.top//devuelve la coordenada en el eje y
    painting=true
    color=document.getElementById("color").value//tomamos el color que nos proporciona el usuario en el input
    linewidth=document.getElementById("lw").value//tomamos el rango de valor que nos proporciona el usuario en el input
    ctx.beginPath();
    
})

canvas.addEventListener("mousemove",e=>{
    if (painting) {//si painting es true entra al if asi comienza a pintar
        paintiing(difX, difY, e.clientX - dif.left, e.clientY - dif.top)//le enviamos los valores para que comience a dibujar
        difX = e.clientX - difX.left//ubicamos el cursor desde el punto X
        difY = e.clientY - difY.top//ubicamos el cursor desde el punto Y
    }
})

canvas.addEventListener("mouseup",()=>{
    ctx.closePath();//cerramos el path asi dejamos de dibujar cuando se suelta el mouse
    painting=false//le cambiamos el valor justamente para que deje de dibujar
})

const paintiing = (x1,y1,x2,y2)=>{//esto posee toda la funcionalidad de dibujar
    ctx.strokeStyle=color;//cambiamos el color
    ctx.lineWidth=linewidth//cambiamos el tamaño
    ctx.moveTo(x1, y1);//toma los primeros puntos y va creando el dibujo
    ctx.lineTo(x2, y2);//toma los primeros puntos y va creando el dibujo
    ctx.stroke()//hace la linea

}