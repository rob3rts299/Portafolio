const contenedor = document.querySelector(".flex-container")
let contador = 0
function crearLlaves(nombre,modelo,precio){
    contador++
    im = "<img class='llave-img' src='images/llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<h4><b>$${precio}</b></h4>`;
    

    return [im,nombre,modelo,precio]
}

let documentFragment = document.createDocumentFragment()

const changeHidden = (Number)=>{
    document.querySelector(".key-data").value = Number
}

for (i=1; i<=20;i++){
    
    let modeloRandom = Math.round(Math.random()*10000)
    let precioRandom = Math.round(Math.random()*10+60)
    let llave = crearLlaves(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom)
    
    let div = document.createElement("DIV")
    div.addEventListener("click",() =>{
        changeHidden(modeloRandom)
    })
    div.tabIndex = i
    div.classList.add(`item-${i}`,'flex-item')
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment)