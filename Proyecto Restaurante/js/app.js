const menu = document.querySelector('.hamburger');
const navegation = document.querySelector('.navegation');
const images= document.querySelectorAll('img');
const btnAll = document.querySelector('.All');
const btnSalad = document.querySelector('.salad');
const btnPasta = document.querySelector('.pasta');
const btnPizza = document.querySelector('.pizza');
const btnDessert = document.querySelector('.dessert');
const containerPlatillos = document.querySelector('.platillos');


document.addEventListener('DOMContentLoaded',()=>{
events()
platillos()
})

const events = () =>{
menu.addEventListener('click',ShowMenu)
}

const ShowMenu = () =>{
    navegation.classList.remove('hide')
    bottonExit()
}

const bottonExit = () =>{
    const btnexit = document.createElement('p')
    const overlay = document.createElement('div')
    overlay.classList.add('window-complete')
    const body = document.querySelector('body')
    if(document.querySelectorAll('.window-complete').length>0)return
    body.appendChild(overlay)
    btnexit.textContent = 'X'
    btnexit.classList.add('btn-Exit')
    console.log(navegation.children)
    /*while(navegation.children[5]){
        navegation.removeChild(navegation.children[5])
    }*/
    navegation.appendChild(btnexit)
    exitMenu(btnexit, overlay)
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen= entry.target
                imagen.src = imagen.dataset.src
                observer.unobserve(imagen)
            }
        })

}) 



images.forEach(imagen=>{
    
    observer.observe(imagen)
})
const exitMenu = (btn, overlay) =>{
    btn.addEventListener('click',()=>{
        navegation.classList.add('hide')
        overlay.remove()
        btn.remove()
    })

    overlay.onclick = function(){
        overlay.remove()
        navegation.classList.add('hide')
        btn.remove()
    }
}


const platillos = () =>{
    let platillosArreglo = []

    const platillos = document.querySelectorAll('.platillo')

    platillos.forEach(platillos=> platillosArreglo = [...platillosArreglo, platillos])
    console.log(platillosArreglo)

    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo')==='ensalada')
    const pastas = platillosArreglo.filter(pasta=> pasta.getAttribute('data-platillo')==='pasta')
    const pizza = platillosArreglo.filter(pizza=> pizza.getAttribute('data-platillo')==='pizza')
    const dessert = platillosArreglo.filter(dessert=> dessert.getAttribute('data-platillo')==='postre')

    showPlatillo(ensaladas,pastas,pizza,dessert,platillosArreglo)
    
}

const showPlatillo = (ensaladas, pastas, pizza, dessert, all) =>{
btnSalad.addEventListener('click', ()=>{
    clearHtml(containerPlatillos)
    ensaladas.forEach(ensalada=> containerPlatillos.appendChild(ensalada))
})
btnPizza.addEventListener('click', ()=>{
    clearHtml(containerPlatillos)
    pizza.forEach(pizza=> containerPlatillos.appendChild(pizza))
})
btnPasta.addEventListener('click', ()=>{
    clearHtml(containerPlatillos)
    pastas.forEach(pasta=> containerPlatillos.appendChild(pasta))
})
btnDessert.addEventListener('click', ()=>{
    clearHtml(containerPlatillos)
    dessert.forEach(dessert=> containerPlatillos.appendChild(dessert))
})
btnAll.addEventListener('click', ()=>{
    clearHtml(containerPlatillos)
    all.forEach(all=> containerPlatillos.appendChild(all))
})

}

const clearHtml = (container) =>{
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}