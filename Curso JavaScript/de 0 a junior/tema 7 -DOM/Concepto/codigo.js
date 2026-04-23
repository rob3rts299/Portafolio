//Selecciona Al Objeto

// parrafo = document.getElementById("parrafo") //asi se selecciona un objeto entero
// document.write(parrafo)  //dira el tipo de elemento que es, En el caso de ser un div sera: [object HTMLDivElement]

// parrafo = document.getElementsByTagName("p") //asi seleccionamos todos los objetos con la misma etiqueta
// document.write(parrafo[1])  //mostrara el tipo, en este caso sera una Collection.

// parrafo = document.querySelector(".parrafo1") //asi se selecciona una clase, id, u otro elemento de la misma forma que se realiza en css
// document.write(parrafo)

// parrafo = document.querySelectorAll(".parrafo")//esto selecciona todos los objetos de un mismo tipo, de igual manera que el anterior
// document.write(parrafo)//muestra si hay varios elementos un nodelist


//Usar Los Objetos

// const rangoEtario = document.querySelector(".rangoEtario")

// rangoEtario.setAttribute("type","range")//De esta manera nosotros modificamos el atributo del objeto, en este caso modicamos el type que pasa de text a range. Tambien con este metodo se pueden agregar los atributos

// document.write(rangoEtario.getAttribute("type"))//toma el atributo del objeto.

// rangoEtario.removeAttribute("type")//Remueve el atributo, dejandolo por default, A diferencia del set que deja el atributo vacio, remove lo elimina


//Atributos globales

// const titulo = document.querySelector(".titulo")

// titulo.setAttribute("contentEditable","true")//con este metodo se puede editar el contenido del h1

// titulo.setAttribute("dir","rtf")//modifica la ubicacion del h1 u objeto

// titulo.setAttribute("hidden","true")//si es true, el elemento se oculta y si es false el elemento aparece 

// titulo.setAttribute("tabindex","0")//muestra si es posible enfocarlo mediante tab

// titulo.setAttribute("title","titulo normal")//muestra un titulo cuando se posaa el cursos sobre el titulo.


// const input = document.querySelector(".input-normal")
// const input1 = document.querySelector(".input-normal1")

// document.write(input.className)//muestra el nombre de input

// document.write(input.value)//muestra el valor que tiene dentro el input

// document.write(input.type = "number")//cambia el type del input con el valor que le asignemos

// input.accept = "image/png"//hace seleccionar solamente las imagenes de formato image.png.


// document.write(input.className)//muestra el nombre de input

//coloca un minimo de caracteres para enviar en un input, si es menos no le permitira enviar el msj
// input.setAttribute("minlength","4")

// input1.placeholder = "que pasaaa" //coloca una marca de agua con la frase que nosotros querramos

// input1.required = "required" // o = " "  pone al input como un campo requerido y se pedira completar el campo, aunque tenga un espacio se lo tomara como required


//style 

// const titulo = document.querySelector(".titulo")

// titulo.style //permite modificar el estilo del objeto, se pueden aplicar todas las propiedades de css

// titulo.style.color = "blue"

// titulo.style.backgroundColor = "#a32"

//clases

const titulo = document.querySelector(".titulo")
const titulo1 = document.querySelector(".titulo1")

// titulo.classList.add("grande")//añade una clase al objeto

// titulo.classList.remove("grande")//remueve una clase al objeto

// document.write(titulo.classList.item(2))//muestra la clase o titulo que posee en el indice indicado, esto es para obtener informacion

// document.write(titulo.classList.contains("rojo"))//esta es parecida a la anterior pero corrobora si el objeto posee la clase señalada

// titulo.classList.toggle("rojo")//este metodo corrobora si posee la clase, en caso de que la tenga la eliminar, en caso de no la tenga la agrega

// titulo.classList.replace("azul", "verde")//reemplaza un clase ya existente por otra que le asignemos posteriormente ---- si la clase no existiera el metodo nos devolveria false y no ocurriria nada


resultado = titulo1.textContent; //devuelve el contenido del texto que se encuentro dentro, sin las expresiones en html que puede llegar a contener 
// resultado = titulo1.innerText //devuelve el contenido del texto igual que el anterior la diferencia es tiene en cuenta los estulos html, pero YA NO SE USA
// // resultado = titulo1.outerText //devuelve el contenido del texto igual que el anterior la diferencia es que YA NO SE USA
// resultado = titulo1.innerHTML //devuelve el conteindo HTML de un elemento, se usar alert para mostrarlo de manera mas completa
// resultado = titulo1.outerHTML //devuelve el codigo HTML completo de un elemento, para mostrarlo de forma mas completa usar alert

// document.write(resultado)


//Creacion de Elemento

const contenedor = document.querySelector(".contenedor")
// const fragmento = document.createDocumentFragment()//metodo para crear una "lista" de elementos sin sobreusar los recursos

// const item = document.createElement("LI")//crea un elemento lista

// const textDelItem = document.createTextNode("esto es un item de la lista")//crea un nodo de text con su valor correspondiente

// item.innerHTML = "Este es un item de la lista"//Esta es otra forma de agregar valor a los elementos, ya que corresponde a unicamente cadenas de texto, IMPORTANTE: ESTO NO ES UN OBJETO
// item.appendChild(textDelItem)//es un metodo para los hijos, permite agregar un hijo al objeto con el valor seleccionado entre los parentesis

// contenedor.appendChild(item)//agregamos la lista al contenedor de manera que esta se muestre dentro de la pagina

// for (i=0; i<20; i++){//forma de crear 20 elementos y agregarlos a una lista
//     const item = document.createElement("LI")
//     item.innerHTML = "Este es un item de la lista"
//     fragmento.appendChild(item)
// }

// contenedor.appendChild(fragmento)//sacar la lista creada por pantalla.


// const primerHijo = contenedor.firstChild//toma como valor al primer hijo del nodo. Al estar separado por un espacio, el primer hijo es justamente el espacio es decir, TEXT
// const ultimoHijo = contenedor.lastChild//toma el valor del ultimo hijo del nodo. En este caso es igual al anterior tomaria un espacio, pero en este ejemplo lo sacamos para corroborar lo antes dicho
// const primerHijo = contenedor.firstElementChild//selecciona el primer elemento del nodo hijo, esa es una solucion para firstChild que toma los espacios.
// const ultimoHijo = contenedor.lastElementChild//mismo que el caso anterior, pero con el ultimo elemento del nodo hijo
// const hijos = contenedor.childNodes//devuelve todos los elementos del nodo hijo. No es un ARRAY, ES UN NODE LIST. Toma los espacios como elementos del nodo
//no es un array pero se pueden usar metodos como por ejemplo Foreach
// const hijos = contenedor.children//no devuelve todos los nodos, sino devuelve solamente los elementos que se encuentran dentro del nodo. NO DEVUELVE LOS TEXT
//este no se puede recorrer por forEach por ser un html collection; Pero si con for IN & OF
// console.log(hijos)


//metodos hijos

const parrafo = document.createElement("P").innerHTML="parrafo"
const h2_nuevo = document.createElement("H2")
h2_nuevo.innerHTML = "tituloooo"   

h2_antiguo = document.querySelector(".h2")

contenedor.replaceChild(h2_nuevo,h2_antiguo)//reemplaza el elemento nuevo por uno ya existente, primero se coloca el elemento que queremos reemplazar y luego el elemento que sera reemplazado

// contenedor.removeChild(h2_nuevo)//remueve/elimina el elemento que seleccionamos

let respuestas = contenedor.hasChildNodes()//verifica que el elemento posee hijos. Lo mostramos por un if

if(respuestas){
    document.write("El elemento si tiene hijos")
} else document.write("el elemento no tiene hijos")


//propiedades de los padress

// console.log(h2_nuevo.parentElement)//Muestra el nodo padre del elemento que estamos indicando
// console.log(h2_nuevo.parentNode)//Muestra el nodo padre del elemento que estamos indicando


//propiedades de los hermanos

// console.log(h2_nuevo.nextSibling)//muestras cual es el nodo que le sigue al elemento, En otras palabras El hermano que posee al lado
// console.log(h2_nuevo.previousSibling)//muestra el nodo anterior al elemento seleccionado, El hermano anterior
// console.log(h2_nuevo.nextElementSibling)//muestra el elemento posterior que le sigue al elemento seleccionado
// console.log(h2_nuevo.previousElementSibling)//muestra el elemento anterior que le sigue al elemento seleccionado----- sera null porque no hay elemento previo.

//otro extra

const div = document.querySelector(".div-3")

console.log(div.closest(".div"))//selecciona el elemento PADRE ASCENDENTE mas CERCANO, El elemento que contenga a nuestro objeto que este MAS CERCANO
