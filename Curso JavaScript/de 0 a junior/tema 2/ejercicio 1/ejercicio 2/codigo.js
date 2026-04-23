
let alumnos = prompt("cuantos alumnos hay inscriptos");
total = 0;


const asistencia = (max)=> {
    let dias = 2;
    let maxx = max;
   
    for( dias <= 0; dias--;){
        document.write("  dia " + dias + ":");
        for(alumnos >= 0; alumnos--;){
        asis = prompt("Él alumno " + alumnos + " esta presente? P=Presente / A=Ausente");
        document.write(asis);
        tot = porcentaje(asis);
        }
        alumnos = maxx;
    }
    document.write(tot);
}


const porcentaje = (asist)=>{
    if(asis == 'p'){
        total=total + 1;
        
    }   else if(asis == 'a'){
        total=total + 1;
        
    }   else
    alert ("asistencia mal colocada");

    return total;
}

asistencia(alumnos);





