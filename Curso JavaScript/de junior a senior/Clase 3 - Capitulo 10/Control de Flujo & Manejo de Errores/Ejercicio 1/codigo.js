const sendButton = document.getElementById('send-nota')
const alumNota = document.getElementById('alum-nota')

sendButton.addEventListener("click", ()=>{
    let result
    let menssage

    try{
        prevRes = parseInt(document.getElementById('alum-nota').value)
        if(isNaN(prevRes)){
            throw "GATOOO"
        }
        
        result = verifyApproval(7,4,prevRes)
        menssage = defineMessage(prevRes)
    } catch(e){
        result = "¿Sos graciosoo?"
        menssage = "Tenemos proteccion"
    }
    openModal(result,menssage)
})

defineMessage = (pr) =>{
    let result
    switch(pr){
        case 1: result = "Sos un HDP"
            break
        case 2: result = "cambiate de carrera"
            break
        case 3: result = "Sos un caso perdido"
            break
        case 4: result = "Sos un HDP con suerte"
            break
        case 5: result = "aprobas"
            break
        case 6: result = "Sos un alumno regular"
            break
        case 7: result = "Sos un aplicado"
            break
        case 8: result = "Sos un alumno estudioso"
            break
        case 9: result = "Sos un Sobresaliente"
            break
        case 10: result = "Sos un Genio"
            break
        default: result = null
        }
    return result
}
//Verificar Aprobacion

verifyApproval = (nota1, nota2,prevRes) =>{
   
    promedio = (nota1 + nota2 + prevRes) / 3
    if (promedio >= 7) {
        return `<span class='green'> APROBADO</span>`
    } else {
        return `<span class='red'> DESAPROBADO</span>`
    }
}

const openModal = (res,msj) =>{
   document.querySelector(".result").innerHTML = res
   document.querySelector(".menssage").innerHTML ="Tu prueba:" + msj
   let modal = document.querySelector(".modal-background")
   modal.style.display  = "flex"
   modal.style.animation = "aparecer 1s forwards"
   console.log(res)
   console.log(msj)
}