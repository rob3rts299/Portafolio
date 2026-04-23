const name = document.getElementById("name")
const subject = document.getElementById("subject")
const email = document.getElementById("mail")
const btnSend = document.getElementById("btn-send")
const result = document.querySelector(".result")

btnSend.addEventListener("click", (e)=>{
    e.preventDefault()
    let error = validated()
    if(error[0]){
        result.innerHTML = error[1]
        result.classList.add("red")
    }else {
        result.innerHTML = "Solicitud enviada Correctamente"
        result.classList.add("green")
        result.classList.remove("red")
    }
})

validated= () =>{
    let error = []
    if (name.value.length <= 3 || name.value.length > 40){
        error[0] = true
        error[1] = "El nombre es Invalido"
        return error
    }
    else if(email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1){
        error[0]= true
        error[1]= "El email es Invalido"
        return error
    } else if (subject.value.length <= 3 || subject.value.length > 40){
    error[0]= true
    error[1]= "La materia no existe"
    }
    error[0]=false
    return error
}

