export const students = [{
    age: 32,
    examScores: [5, 6],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [6, 4],
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
export function showNumberStudents(array) {
    let count = 0
    const showNumberStudents = students.forEach(student => {
        count++
    })
    return count
}



//   3- Mostrar por consola todos los nombres de los alumnos.
export function showNameStudents(array) {
    array.forEach(function(student, array) {
        console.log(student.name)
    })
}


//   4- Eliminar el último alumno de la clase.
export function eliminateLastStudent(array) {
    return array.pop()
}



//   5- Eliminar un alumno aleatoriamente de la clase.
export function eliminateRandomStudent(array){
    const random = Math.floor(Math.random() * array.length)
    return array.splice(random, 1)
} 


//   6- Mostrar por consola todos los datos de los alumnos que son chicas.
export function getFemaleStudents(array){
    return array.filter(student => student.gender === 'female')
}




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
export function anyFemaleStudent(array){
    return array.every(student => student.gender === 'female')
}


//   9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export function ageStudents(array){
    return array.filter(student => student.age >= 20 && student.age <= 25)
}


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
    let newStudent = {
        age: ageStudent,
        examScores: [],
        gender: randomGender,
        name: nameStudent,
    }
    array.push(newStudent)
    return array
}


  
//   11- Mostrar por consola el nombre de la persona más joven de la clase.
//   ------->¡OJO!, si varias personas de la clase comparten la edad más baja, 
//           cualquiera de ellos es una respuesta válida.

export function getYoungerStudent(array) {
    let youngerStudent = array[0]
    for (let i = 1; i < array.length; i++) {
        if (youngerStudent.age > array[i].age) {
            youngerStudent = array[i]
        }
    }
    return youngerStudent.name
}



  
//   12- Mostrar por consola la edad media de todos los alumnos de la clase.
export function getMiddleAgesStudents(array){
    let sumAgeStudents = array.reduce((sum, student) => sum + student.age, 0)
    let numStudents = array.length
    let middleAgesStudents = sumAgeStudents / numStudents
    return parseFloat(middleAgesStudents.toFixed(2))
}




//   13- Mostrar por consola la edad media de las chicas de la clase.
export function getMiddleAgeFemale(array) {
    let sumFemaleAgeStudents = 0
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].gender === 'female') {
            sumFemaleAgeStudents += array[i].age
            count++
        }
    }
    return sumFemaleAgeStudents / count
}


//   14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, 
//      tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
function calculateRandomNote(min, max) {
    const randomNote = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNote;
}

export function getNewNote(array) {
    for (let i = 0; i < array.length; i++) {
        let randomNoteStudent = calculateRandomNote(0, 10)
        array[i].examScores.push(randomNoteStudent)
    }
    return array
}



//   15- Ordenar el array de alumnos alfabéticamente según su nombre. 
export function orderAlphabetically(array) {
    return array.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
          }
          return 0
        })
}


//   16- Mostrar por consola el alumno de la clase con las mejores notas.
    //(El alumno con mejores notas es aquel cuyo sumatorio de todas sus notas es el valor más alto de todos.)
export function getBestStudent(array) {
    let bestStudent = ''
    let sumNotes = 0
    let bestNote = []
    for (let i = 0; i < array.length; i++) {
        sumNotes = array[i].examScores.reduce((sum, note) => sum + note, 0) 
        bestNote.push(sumNotes)
    }
    for (let index = 0; index < bestNote.length; index++) {
        if (index === 0) {
            if (bestNote[index] > bestNote[index + 1]) {
                bestStudent = array[index].name
            } else {
                bestStudent = array[index + 1].name
            }
        } else {
            if (bestNote[index] > bestNote[index + 1] && bestNote[index] > bestNote[index - 1]) {
                bestStudent = array[index].name
            } 
        }
        
    }
    return bestStudent
}
        

  
//   17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
export function getHigherNote(array) {
    let bestMiddleNote = ''
    let sumNotes = 0
    let bestNote = []
    let middleNote
    for (let i = 0; i < array.length; i++) {
        sumNotes = array[i].examScores.reduce((sum, note) => sum + note, 0)
        let arrayNotes = array[i].examScores.length
        middleNote = parseFloat(sumNotes / arrayNotes).toFixed(2)
        bestNote.push(middleNote)
    }
    for (let index = 0; index < bestNote.length; index++) {
        if (index === 0) {
            if (bestNote[index] > bestNote[index + 1]) {
                bestMiddleNote = array[index].name
            } else {
                bestMiddleNote = array[index + 1].name
            }
        } else {
            if (bestNote[index] > bestNote[index + 1] && bestNote[index] > bestNote[index - 1]) {
                bestMiddleNote = array[index].name
            } 
        }
        
    }
    let higherNote = Math.max(...bestNote)

    return `La nota media más alta es: ${higherNote} del alumn@: ${bestMiddleNote}`
}


//   18- Añadir un punto extra a cada nota existente de todos los alumnos. 
// (Recordad que la nota máxima posible es 10. Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.)
export function giveExtraPoint(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].examScores.length === 0) {
            array[i].examScores.push(10)
        } else {
            for (let index = 0; index < array[i].examScores.length; index++) {
                if (array[i].examScores[index] < 10) {
                    array[i].examScores[index]++
                } 
            }
        }
    } 
    return array
}


