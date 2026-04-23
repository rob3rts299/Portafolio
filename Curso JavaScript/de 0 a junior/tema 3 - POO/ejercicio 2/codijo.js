
class app{
    constructor(descargas,peso,puntuacion,nombre){
        this.desc = descargas;
        this.puntaj = puntuacion;
        this.peso = peso;
        this.name = nombre
        this.iniciada = false
        this.instalada = false
    }
    info(){
        document.write(`la app ${this.name}<br>
                        tiene una puntuacion de: ${this.puntaj} <br>
                        se ha descargado un total de: ${this.desc} <br> <br>`)
    }
    instalar(){
        let resp = prompt(`desea instalar la app ${this.name}??`)
        if(resp == "si" || resp == "SI"){
            if(this.instalada==false){
            this.instalada = true
            alert("la aplicacion se ha instalado con exito.")
        }else alert("la App Ya esta instalada en este dispositivo")

        } else alert("la aplicacion no se ha instalado.")
    }
    abrir(){
        if(this.iniciada== false){
        alert("la aplicacion se esta iniciando")
    }   else    alert("la app ya esta corriendo")
    }
    cerrar(){
        if(this.iniciada == true){
            this.iniciada = false
         alert("la aplicacion se esta cerrando")
    }
    }
    desintalar(){
        if(this.instalada == true){
        let resp = prompt(`Estas seguro de que deseas desintalar a ${this.name}??`)

        if(resp == "si" || resp == "SI"){
            this.instalada = false
            alert("la aplicacion se ha desinstalado con exito.")
        } else alert("la aplicacion no se ha desintalado.")
    }
    }
}


const app1 = new app(1000,"2GB",9,"a");
const app2 = new app(1000,"1GB",5,"b");
const app3 = new app(1000,"2GB",3,"c");
const app4 = new app(1000,"4GB",8,"d");
const app5 = new app(1000,"850mb",8,"e");
const app6 = new app(1000,"3GB",10,"f");
const app7 = new app(1000,"500mb",4,"g");

app1.info()
app2.info()
app3.info()
app4.info()
app5.info()
app6.info()
app7.info()

app1.instalar()
app2.abrir()
app3.cerrar()
app1.desintalar()