export const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
export const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
export const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
export const availableGenders = ['male', 'female'];
  
  
//   1- Mostrar en formato de tabla todos los alumnos.
export function showStudents(students) {
    console.table(students)
}

//   2- Mostrar por consola la cantidad de alumnos que hay en clase.
let count = 0
export const showNumberStudents = students.forEach(student => {
    count++
});



//   3- Mostrar por consola todos los nombres de los alumnos.
export const showNameStudents = students.forEach(student => {
    student.name
})


//   4- Eliminar el último alumno de la clase.
export const eliminateLastStudent = students.slice(1,2)



//   5- Eliminar un alumno aleatoriamente de la clase.
export function randomStudent(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[Math.floor(Math.random() * array.lenght)]
        array = array.slice(element)        
    }
    return array
} 


//   6- Mostrar por consola todos los datos de los alumnos que son chicas.
export const femaleStudents = students.filter(student => student.gender === 'female')



//   7- Mostrar por consola el número de chicos y chicas que hay en la clase.
export function numberGenderStudents(array) {
    let femaleStudents = 0
    let maleStudents = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender === 'female'){
            femaleStudents++
        } else {
            maleStudents++
        }
    }
    return `Número de chicas: ${femaleStudents} y número de chicos: ${maleStudents}`
}



//   8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
export const anyFemaleStudent = students.some(student => student.gender === 'female')



//   9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export const ageStudents = students.filter(student => student.age > 20 && student.age < 25)



//   10- Añadir un alumno nuevo con los siguientes datos:
        //   nombre aleatorio.
        //   edad aleatoria entre 20 y 50 años.
        //   género aleatorio.
        //   listado de calificaciones vacío.
        // -----> ¡OJO!, el nombre y el género tienen que ir acordes.

function getRandom(array) {
    let random = array[Math.floor((Math.random()*array.length))];
    return random
}   

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

export function addRandomStudent(array){
    let nameStudent
    let ageStudent = calculateRandomNumber(20, 50)
    let randomGender = getRandom(availableGenders)
    if (randomGender === 'female') {
        nameStudent = getRandom(availableFemaleNames)
    } else {
        nameStudent = getRandom(availableMaleNames)
    }
    return {
        age: ageStudent,
        examScores: [],
        gender: randomGender,
        name: nameStudent,
    }
}

export const newStudent = students.push(addRandomStudent(availableGenders))

 

  
//   11- Mostrar por consola el nombre de la persona más joven de la clase.
//   ------->¡OJO!, si varias personas de la clase comparten la edad más baja, 
//           cualquiera de ellos es una respuesta válida.

export function youngerStudent(array) {
    let youngerStudent
    for (let i = 0; i < array.length; i++) {
        if (array[i].age < array[i + 1].age){
            youngerStudent = array[i].name
        } else {
            youngerStudent = array[i + 1].name
        }
        
    } return youngerStudent
}

  
//   12- Mostrar por consola la edad media de todos los alumnos de la clase.
export const sumAgeStudents = students.reduce((sum, student) => sum + student.age, 0)




//   13- Mostrar por consola la edad media de las chicas de la clase.
//   14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
//   15- Ordenar el array de alumnos alfabéticamente según su nombre. 
//   16- Mostrar por consola el alumno de la clase con las mejores notas.
    //(El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.)
  
//   17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
//   18- Añadir un punto extra a cada nota existente de todos los alumnos. 
    // (Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.)