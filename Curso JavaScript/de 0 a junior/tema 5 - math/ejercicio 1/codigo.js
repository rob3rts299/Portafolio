
let materia = prompt("que materia le gustaria obtener informacion");



const catedra = (materia) =>{

    // let mat = parseInt(materia)

    if (materia == "matematica"){
        let Alumnos = ["a","b","c","d","f","g","h","i","j","k"]
        let inscriptos = 20;
        document.write("El profesor Titular de esta materia es: Ing. Maldonado <br>")
   
        for(i = 0;i < inscriptos; i++){
            document.write("los alumnos inscriptos son: " + Alumnos[i] + "<br>")
        }

    } else if (materia == "lengua"){
        let Alumnos = ["a","b","c","d","f","g","h","i","j","k"]
        let inscriptos = 20;
        document.write("El profesor Titular de esta materia es: Ing. Cesped <br>")
   
        for(i = 0;i < inscriptos; i++){
            document.write("los alumnos inscriptos son: " + Alumnos[i] + "<br>")
        }

    } else if (materia == "programacion"){
        let Alumnos = ["a","b","c","d","f","g","h","i","j","k"]
        let inscriptos = 20;
        document.write("El profesor Titular de esta materia es: Ing. Campari <br>")
   
        for(i = 0;i < inscriptos; i++){
            document.write("los alumnos inscriptos son: " + Alumnos[i] + "<br>")
        }

    } else if (materia == "administracion"){
        let Alumnos = ["a","b","c","d","f","g","h","i","j","k"]
        let inscriptos = 20;
        document.write("El profesor Titular de esta materia es: Ing. Mott <br>")
   
        for(i = 0;i < inscriptos; i++){
            document.write("los alumnos inscriptos son: " + Alumnos[i] + "<br>")
        }

    } else if (materia == "algoritmos"){
        let Alumnos = ["a","b","c","d","f","g","h","i","j","k"]
        let inscriptos = inscriptos;
        document.write("El profesor Titular de esta materia es: Ing. Fuentes <br>")
   
        for(i = 0;i < 10; i++){
            document.write("los alumnos inscriptos son: " + Alumnos[i] + "<br>")
        }

    } 
}


catedra(materia);