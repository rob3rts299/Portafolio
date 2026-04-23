
let faltas = prompt("cuantos veces falto a la materia?")
let tps = prompt("cuantos trabajos practicos entrego?")
let examen1 = prompt("Nota del Primer Parcial?")
let examen2 = prompt("Nota del Segundo Parcial?")


const aprobar = (faltas,tps,examen1,examen2) =>{

    let asistenciaTotal = 20;
    let tpsTotal = 10;
    let tpsminimo = tpsTotal * 0.75;
    let promedioalumno = asistenciaTotal-faltas
    let promedioMin = asistenciaTotal * 0.9
    let promMateria = (examen1+examen2)/2
    let table = [examen1,examen2,tps,faltas]
    console.groupCollapsed("Resultado de la Comparacion")

    if(promedioalumno>=promedioMin && promMateria >= 7 && tps >= tpsminimo){
        console.log("El alumno Si Cumple la condicion del Promedio de Asistencia")
        console.log("%cAPROBADO"," color:yellow; font-zise:15px")
        console.log("El alumno Si Cumple la condicion del Promedio de la Materia")
        console.log("%cAPROBADO"," color:yellow; font-zise:15px")
        console.log("El alumno Si Cumple la condicion del Promedio de la Materia")
        console.log("%cAPROBADO"," color:yellow; font-zise:15px")
    } 
 else   console.log("EL Alumno %cNO cumple con las condiciones para %cAPROBAR.","color:red")
       


    console.log("TABLA") 
    console.table(table)  


}

aprobar(faltas,tps,examen1,examen2)