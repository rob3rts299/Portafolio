
class telphone{
    constructor(peso,color,resolucionPan,resolucionCam,ram){
        this.color=color;
        this.peso=peso;
        this.resolucionPan=resolucionPan;
        this.resolucionCam=resolucionCam;
        this.ram=ram;
        this.on=false;

    }
    mobileInfo(){
        return `El unico color de este telefono es ${this.color} y sus especificaciones son: <br>
        -----------Peso: ${this.peso} <br>
        -----------Resolucion Pantalla: ${this.resolucionPan} <br>
        -----------Resolucion Camara: ${this.resolucionCam} <br>
        -----------meromia Ram: ${this.ram} <br>`;
    }
    botonDeEncendido(){
        if(this.on==false){
            this.on=true;
            alert("el celular se ha prendido");
        }   else
        alert("Su celular se esta apagando.");
        this.on=false;
    }
    reiniciar(){
        if(this.on==true){
            this.on=false;
            alert("su celular se esta reiniciando...");
            if(this.on==false){
                this.on=true;
                alert("iniciando el dispositivo");
            }
        }
    }
    tomarFotos(){
        alert(`foto tomada en resolucion de: ${this.resolucionCam}`)
    }
    grabar(){
        alert (`grabacion en vivo en resolucion de: ${this.resolucionCam}`)
    }
}


class telphoneGamaAlta extends telphone{
    constructor(peso,color,resolucionPan,resolucionCam,ram,resolucionCamaraExtra){
        super(peso,color,resolucionPan,resolucionCam,ram)
        this.camaraEx=resolucionCamaraExtra;
    }
    informacio(){
        return this.mobileInfo() + `-----------resolucion de la camara extra: ${this.camaraEx} <br>`
    }
    reconocimientoFacial(){
        alert("reconocimiento facial");
    }
    grabarCamLenta(){
        alert("Estas grabando en camara lenta");
    }
}

const telefono1 = new telphone("189gm","red","1080","2800HD","8gb")
const telefono2 = new telphone("160gm","blue","1080","2400HD","16gb")
const telefono3 = new telphone("200","green","2040","4080HD","32gb")

const telefonoaltagama1 = new telphoneGamaAlta("189gm","red","1080","2800HD","8gb","4k")
const telefonoaltagama2 = new telphoneGamaAlta("150gm","black","1080","2800HD","8gb","full HD 4k")


// document.write(telefono1.mobileInfo())



document.write(telefonoaltagama1.informacio())
document.write(telefonoaltagama2.informacio())

// telefono1.botonDeEncendido()
// telefono1.reiniciar()
// telefono1.tomarFotos()
// telefono1.grabar()
// telefono1.botonDeEncendido()

