const materias = {
    fisica: [90,7,4,"fisica"],
    matematica: [70,5,4,"matematica"],
    algoritmos: [70,2,7,"algoritmo"],
    programacion: [60,2,2,"programacion"],
    quimica:  [95,9,5,"quimica"],
    informatica: [92,4,8,"informatica"]
}

const Asistencia = () =>{
    for (materia in materias){
    asistencia = materias[materia][0];
if (asistencia >= 90){
    console.log(`el alumno cumple con la condicion de ${materias[materia][3]} en base a la asistencia`)
    console.log("%cAPROBADO","color:yellow")
}else  {
    console.log(`el alumno quedo libre en ${materias[materia][3]} por la asistencia.`);
    console.log("%cNO APROBADO","color:red")
}}
}

Asistencia()