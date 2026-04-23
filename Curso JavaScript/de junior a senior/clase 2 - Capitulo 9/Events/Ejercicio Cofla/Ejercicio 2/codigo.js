let alumnos = [{
    nombre: "Robero Pereyra",
    email: "Roberto_Pereyr@hotmail.com",
    materia:"Fisica 2"
},{
    nombre: "Franco",
    email: "Franco@hotmail.com",
    materia:"Fisica 1"
},{
    nombre: "Cofla",
    email: "Cofla@hotmail.com",
    materia:"Matematica 3"
},{
    nombre: "Dalto",
    email: "dal_to@hotmail.com",
    materia:"Programacion"
}];

const confirmar = document.querySelector(".btn-confirm")
const container =  document.querySelector(".grid-container")


for(alumno in alumnos){
    let datos = alumnos[alumno]
    let nombre = datos["nombre"]
    let email = datos["email"]
    let materia = datos["materia"]
    let htmlCode = `
    <div class="grid-item name">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item subject">${materia}</div>
    <div class="grid-item week">
        <select class="week-select">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`
   container.innerHTML += htmlCode

}

confirmar.addEventListener("click",()=>{
    let confirmWeek = confirm("¿Realmente quieres confirmar las mesas?")
    if(confirmWeek){
        document.body.removeChild(confirmar)
        let elementos = document.querySelectorAll(".week")
    let semanaElegida = document.querySelectorAll(".week-select")
    for (elemento in elementos){
        semana = elementos[elemento]
        semana.innerHTML = semanaElegida[elemento].value

    } 
    }
})

