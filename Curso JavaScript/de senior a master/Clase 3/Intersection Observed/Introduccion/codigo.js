"use strict"

// const mq = matchMedia("(max-width: 499px)")
// const box = document.querySelector(".box")

// console.log(mq.matches)

// mq.addEventListener("change",()=>{    
//     if (mq.matches) {
//         console.log("resolucion cambiada")
//         box.classList.replace("box","responsive-box")
//     }else if(box.className == "responsive-box"){
//         console.log("resolucion Original ")
//         box.classList.replace("responsive-box","box")
//     }
//     console.log(mq.matches)
// })

const boxs = document.querySelectorAll(".box")
const box3 = document.querySelector(".box3")

const verifyVisibility = (entries) =>{// nos devolvera un arreglo porque siempre seran entradas.
    // const entry = entries[0]
    // console.log(entry)//muestra las entradas que se obtuvieron
    // console.log(entry.isIntersecting)//si el objeto (en este caso caja) entra en pantalla el valor sera true, en caso contrario false

    for (const entry of entries){//realizamos el for para poder entrar en todas las entradas que se enviaron
        if (entry.isIntersecting) console.log("Se esta viendo la caja: ",entry.target.textContent)//la condicion se ejecutara siempre que aparezca un nuevo objeto (en este caso box) en pantalla.
        //y mostrara que caja se esta viendo en ese momento.
    }
}

const options = {//Opcional
    // root: //elegi un elemento de referencia
    // rootMargin: "-60px"//dice cuanto margen tiene, es para "predecir" o "Tardar en mostrar" el objeto, en este caso la caja.
    // treshold: 0.5//señala cuanto va a ocupar el cuerpo del objeto, En el ejemplo se marca al 0.5 que seria la mitad de la caja, por lo tanto esta no se vera hasta que en la pantalla se muestre la mitad de la caja.
//en el caso de 1, el evento se dispararia cuando se muestre por completo el cuerpo del objeto.
}

const observer = new IntersectionObserver(verifyVisibility,options)//le asignamos a una variable la api
//el intersectionobserver recibe 2 parametros: (callback,options) Funcion que lo llame y las opciones

observer.observe(box3)//observe es un metodo que lo que hace es que observa el elemento que le digamos y nos da cierta informacion de este elemento.
//siempre que la caja 3 este en la "pantalla" y se visualice el metodo se ejecutara. Si no esta en pantalla este no hara nada. Los datos en este cambiaran.


for (const box of boxs) {//con in mostrara la cantidad de elementos que tiene dentro y cierta informacion adicional. 
    //Con of mostrara los objetos en si en formato html
    // console.log(box)
    observer.observe(box)
    
}