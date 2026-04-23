const subjectHTML = document.querySelector(".subjects")


const subjects = [
    {
        name: "Fisica 3",
        average: 7
    },
    {
        name: "Programacion 4",
        average: 10
    },
    {
        name: "Fisica 2",
        average: 2
    },
    {
        name: "Programacion Avanzada",
        average: 8
    }

]
const getSubject=(id)=>{
 return new Promise((res,rej)=>{
    let subject = subjects[id]
    if(subject==undefined) rej("La materia no Existe");//mediante el if verificamos si se encuentra algo dentro del objeto, en caso de que no, no existen mas materias
    else {
        setTimeout(()=>{res(subject)},Math.random()*400)//esto es innecesario pero lo hacemos para crear la ilusion de esperar de carga de datos que se encontrarian en un servidor
    }
 })
}

const returnSubject = async()=>{//retornamos todas las materias mediante un for para que se pueda caminar el objeto
    let subject = []
    for (let i = 0; i < subjects.length; i++) {
        // subject[i] = getSubject(i)//tomamos las materias y las ubicamos en un array
        // subject[i].then(mat=> console.log(mat)) //esto funcionaria en caso de tener todas las materias y datos dentro del programa en caso de tener un servidor no funcionario
        subject[i]= await getSubject(i)
        let newHTMLCode = `<div class="subject-list">
                        <div class="name-subject">${subject[i].name}</div>
                        <div class="average-subject">${subject[i].average}</div>
                        </div>`
        subjectHTML.innerHTML += newHTMLCode
    }

}

returnSubject()