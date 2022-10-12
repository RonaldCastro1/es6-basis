//TIPO DE INDEPENDECIAS
//COMMONJS 
//ES6MODULE
//Tipos de variable
//COLLBACK = una funcion que se ejecutara al interior dwe otra funcion cuando esta ultimo se invoque
const colors = require(`colors`)
const materias = require("./materias")
//crear nueva materia y ponerla en el arreglo materias
//push()-- metodo de arreglo
materias.push({
    nombre: "Java",
    instructor: "Cristian B",
    notas: [
        3.4, 4
    ],
    tipo: "tecnica"
})
//recorrido del arreglo
materias.forEach((materia)=>{
        console.log(`nombre:${materia.nombre} tipo:${materia.tipo}`.bgMagenta)
        console.log('--------------')
    } )

//elimar materia: splice
materias.splice(3,1)
console.log(materias)

//actualizar: findindex
let indice = materias.findIndex((materia)=> materia.instructor === "Luis Baquero")
console.log(indice)
materias[indice].instructor = "Fernando Galindo";
materias[indice].notas = [5,1]
console.log(materias)



//map: es una funcion de metodo de arreglos en es6, crea un arreglo apartir de otro
//const profesores = materias.map((materia)=>{
//    return materia.instructor
//})
//console.log(profesores)


//find: localizar elementos de un arrego
//find= primera ocurrencia
//filter= todas las ocurrencias

//const PHP = materias.filter((materia)=>{
//    return materia.instructor === "Cristian Buitrago"
//})

//console.log(PHP)





