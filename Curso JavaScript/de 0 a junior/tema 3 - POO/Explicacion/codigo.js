
class animals{
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info = `soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`
    }
    viewInfo(){
        document.write(this.info + "<br>")
    }

}


class perro extends animals{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null;
    }
    ladrar(){
        alert("WAW");
    }
    set modificarRaza(newName){
        this.raza = "newName";
    }

}

class pajaritos extends animals{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    static cantar(){
        alert("PIO PIO");
    }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

const perro1 = new perro("perro", 5, "red","dooberman");
const pajaro = new pajaritos("pajaro", 2, "red","colibri");
// const pajaro = new animals("pajaro", 1, "blue","colibri"); puede exister o no, todo depende si existe el static

// document.write(perro.info);

perro1.modificarRaza = "pedro";
pajaro.setRaza = "pedro"

document.write(pajaro.getRaza)