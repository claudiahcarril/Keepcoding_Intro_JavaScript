import * as myModule from './modules.js'
import readline from "readline";


// Pedir número de ejercicio
const rl = readline.createInterface({
  input: process.stdin,      
  output: process.stdout  
});

const isInt = (str) => {
  const integer = parseInt(str)
  if (Number.isNaN(integer)) {
      return false
  } else {
      return true
  }
}

function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
      rl.question('Introduce un número de 1 a 18: ', (num) => {   
        rl.pause();
        console.log(num)
        if (isInt(num)) {
          resolve(num)
        } else {
          reject('Debes introducir un número del 1 al 18')
        }
      })  
  }) 
  return promise
}


async function playGame() {
  console.log({
    1: "Mostrar en formato de tabla todos los alumnos",
    2: "Mostrar por consola la cantidad de alumnos que hay en clase",
    3: "Mostrar por consola todos los nombres de los alumnos",
    4: "Eliminar el último alumno de la clase",
    5: "Eliminar un alumno aleatoriamente de la clase",
    6: "Mostrar por consola todos los datos de los alumnos que son chicas",
    7: "Mostrar por consola el número de chicos y chicas que hay en la clase",
    8: "Mostrar true o false por consola si todos los alumnos de la clase son chicas",
    9: "Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años",
    10: "Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío",
    11: "Mostrar por consola el nombre de la persona más joven de la clase",
    12: "Mostrar por consola la edad media de todos los alumnos de la clase",
    13: "Mostrar por consola la edad media de las chicas de la clase",
    14: "Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas",
    15: "Ordenar el array de alumnos alfabéticamente según su nombre",
    16: "Mostrar por consola el alumno de la clase con las mejores notas",
    17: "Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece",
    18: "Añadir un punto extra a cada nota existente de todos los alumno",
  })

  let numberFromConsole
  do {
    try {
      numberFromConsole = await getNumberFromConsole()
    } catch (error){
      console.log(error)
      process.exit(0)
    }

    if (numberFromConsole === 0) {
      process.exit(0)
    } else 



    switch(numberFromConsole) {
      case 1:
        // console.table(myModule.showStudents(myModule.students))
        break;
      case 2:
        // console.log(myModule.showNumberStudents)
        break;
      case 3:
        // console.log(myModule.showNameStudents)
        break;
      case 4:
        // console.table(myModule.eliminateLastStudent)
        break;
      case 5:
        // ----------------------------------------------------> FALTA
        break;
      case 6:
        // console.log(myModule.femaleStudents)
        break;
      case 7:
        // console.log(myModule.numberGenderStudents(myModule.students))
        break;
      case 8:
        // console.log(myModule.anyFemaleStudent)
        break;
      case 9:
        // console.log(myModule.ageStudents)
        // -------------------------------------> REVISAR!
        break;
      case 10:
        // console.table(myModule.students)
        // -------------------------------------> REVISAR!
        break;  
      case 11:
        // console.log(myModule.youngerStudent(myModule.students))
        // -------------------------------------> REVISAR!
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
      case 16:
        break;
      case 17:
        break;  
      case 18:
        break;
    }
  
  } while (numberFromConsole > 0 && numberFromConsole < 19)

}

// playGame()

console.table(myModule.students)
console.log(myModule.sumAgeStudents)
process.exit()



