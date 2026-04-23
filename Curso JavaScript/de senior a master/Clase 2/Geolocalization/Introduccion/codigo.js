"use strict"

const geolocation = navigator.geolocation

console.log(geolocation)//nos muestra el prototype de la API geolocation

const position = (pos) =>{
    console.log(pos)//nos muestra todo la informacion de nuestra posicion
    console.log(pos.coords.longitude)//muestra solamente las coordenadas de longitud
    console.log(pos.coords.latitude)//muestra solamente las coordenadas de latitud
}

const err = ()=> console.log(e)

const options = {
    maximumAge: 0,//la cantidad de tiempo que se quiere guardar en cache la position. 0 significa que nunca se guardara y se usara siempre la ubicacion en tiempo real.
    timeOut: 3000,//el tiempo que tardara en brindar esta informacion
    enableHightAccurancy: true//se trata de la precision con la cual se busca entregar la informacion. De esta manera se usara todos los medios tecnologicos para obtener la mayor precision en la informacion.
}

geolocation.getCurrentPosition(position,err,options)//mediante esta funcion obtenemos nuestra ubicacion. O la ubicacion del dispositivo en cuestion. Para ser mas exacto la posicion nos la dara los valores de latitude & longitude. (se miden a partir del meridiano de greenwitch)
//position ======> la ubicacion con la que trabajara la funcion. Puede ser en tiempo real o directamente una ubicacion brindada por internet.
//err =======> nos marcar en caso de que existiera un error en la obtencion de la informacion
//options =======> son todos los tipos de opciones que podemos agregar para que se pueda obtener la informacion de la ubicacion con la mayor calidad posible.

