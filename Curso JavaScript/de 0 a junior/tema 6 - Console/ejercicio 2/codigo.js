let trabajo = "240 minutos de trabajo"
let tp = "100 minutos de tp"
let estudio = "100 minutos de estudio"
let homework = "30 minutos de tareas del hogar"
let descanso = "10 minutos de descanso"


console.log("TAREAS")

for (i= 0 ;i < 14;i++){
    if (i==0){
        console.groupCollapsed("semana 1")
    }
    console.group("dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd()
    if(i==7){
        console.groupEnd()
        console.groupCollapsed("semana 2")
    }
}

