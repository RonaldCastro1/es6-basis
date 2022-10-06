//TIPO DE INDEPENDECIAS
//COMMONJS 
//ES6MODULE
//Tipos de variable
//COLLBACK = una funcion que se ejecutara al interior dwe otra funcion cuando esta ultimo se invoque
const colors = require(`colors`)
const materias = require("./materias")

//recorrido del arreglo
materias.forEach((materia)=>{
    if(materia.instructor==='Cristian Buitrago'){
        console.log(`nombre:${materia.nombre} tipo:${materia.tipo}`.bgMagenta)
    }
    
})

//map: es una funcion de metodo de arreglos en es6, crea un arreglo apartir de otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})
console.log(profesores)
//find: localizar elementos de un arrego
//find= primera ocurrencia
//filter= todas las ocurrencias

const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})
console.log(PHP)



