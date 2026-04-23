objeto = {
    "variable1" : "pedro",//De esta manera se definen los objetos JSON
    variable1 : "pedro",//y esta otra manera se define una variable en si
    "variable2" : "jorge"//se usan las comillas para cuando se intercambie la informacion no sea un problema y no nos ocaciones errores
}

const objeto1 = {"variable1" : "pedro","variable2" : "pedro"}//si lo dejamos de esta manera este JSON esta deserializado
const objeto2 = '{"variable1" : "pedro","variable2" : "pedro"}'//Para que un JSON este serealizado es tan simple con ponerle comillas simples, 
console.log(objeto)
// console.log(typeof objeto1)
// console.log(typeof objeto2)//es un string, pero con formato JSON. Por lo tanto es un JSON serializado

const serializado = JSON.stringify(objeto1)//el metodo stringify() lo que hace es serializar un objeto JSON. Lo que lo transformaria a string
const deserializado = JSON.parse(objeto2)//El metodo parse() lo que haces es deserializar un objeto JSON. y lo transforma en bojeto para que lo podamos usar
console.log(typeof serializado)

console.log(typeof deserializado)


//**********************AJAX***Asynchronous JavaScript and XML******************//
//Se trabajara por xamp, En la carpeta de Curso ademass/JavaScript/Codigo