let materias ={
    fisica: ["ing. cobresi","pedro","roberto","franco","milagros"],
    programacion: ["ing. paredes","pedro","roberto","franco","maria","cofla","rocio"],
    quimica: ["ing. campazzo","pedro","roberto","franco","maria","cofla"],
    logica: ["ing. de la fuente","franco","maria","cofla","rocio","milagros"]
}

const inscribir = (alumno, materia) => {
    personas = materias[materia];
    
    if(personas.length >= 7){
        document.write(`lo lamento ${alumno}, la clase ${materia} ya supero el limite de inscriptos <br>`)
    } else {
    personas.push(alumno)
        if(materia == "fisica"){
             materias = {
                fisica: personas,
                programacion: materias['programacion'],
                quimica: materias['quimica'],
                logica: materias['logica']
             }
        } else if(materia == "programacion"){   
            materias = {
               fisica: materias['fisica'],
               programacion: personas,
               quimica: materias['quimica'],
               logica: materias['logica']
            }
       } else if(materia == "quimica"){
        materias = {
           fisica: materias['fisica'],
           programacion: materias['programacion'],
           quimica: personas,
           logica: materias['logica']
        }
   }    else if(materia == "logico"){
         materias = {
            fisica: materias['fisica'],
            programacion: materias['programacion'],
            quimica: materias['quimica'],
            logica: personas
    }       

}   document.write(`felicidades ${alumno} Pudiste inscribirte con exito a la catedra de ${materia} <br>`)
    document.write(materias[materia])
    }
}

inscribir("elias","quimica")
