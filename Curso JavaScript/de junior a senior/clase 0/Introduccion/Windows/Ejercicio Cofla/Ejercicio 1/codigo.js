
let alto = screen.availHeight
let alto1 = 1080
let ancho = screen.availWidth
let ancho1 = 1920

document.write(`el Alta de la pantalla es: <b>${alto}px</b>, y El ancho de la pantalla es: <b>${ancho}px</b>`)

if(alto1<1080 && ancho1<1920){
    alert("Lamentablemente la pantalla no es Full HD")
}else{
    let comprar = confirm("¿Esta Seguro que quiere comprar la pantalla full HD?")
    if(comprar==true){
        alert("FELICIDADES, por la compra. Vamos a preparar todo para enviarle el monito Full HD")
    } else alert("COMPRA CANCELADA, Espero que tenga un muy buen dia. Vuelva pronto.")
}