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
        if (isInt(num)) {
          resolve(parseInt(num))
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
    18: "Añadir un punto extra a cada nota existente de todos los alumnos",
  })

  let numberFromConsole
  do {
    do {
      try {
        numberFromConsole = await getNumberFromConsole()
      } catch (error){
        console.log(error)
        numberFromConsole = '-'
      }
    } while (numberFromConsole === '-')
    
    if (numberFromConsole === 0 || numberFromConsole > 18) {
      process.exit(0)
    } 

    switch(numberFromConsole) {
      case 1:
        myModule.showStudents(myModule.students)
        break;
      case 2:
        console.log(myModule.showNumberStudents(myModule.students))
        break;
      case 3:
        myModule.showNameStudents(myModule.students)
        break;
      case 4:
        myModule.eliminateLastStudent(myModule.students)
        break;
      case 5:
        myModule.eliminateRandomStudent(myModule.students)
        break;
      case 6:
        console.table(myModule.getFemaleStudents(myModule.students))
        break;
      case 7:
        console.log(myModule.numberGenderStudents(myModule.students))
        break;
      case 8:
        console.table(myModule.anyFemaleStudent(myModule.students))
        break;
      case 9:
        console.table(myModule.ageStudents(myModule.students))
        break;
      case 10:
        console.table(myModule.addRandomStudent(myModule.students))
        break;  
      case 11:
        console.log(myModule.getYoungerStudent(myModule.students))
        break;
      case 12:
        console.table(myModule.getMiddleAgesStudents(myModule.students))
        break;
      case 13:
        console.log(myModule.getMiddleAgeFemale(myModule.students))
        break;
      case 14:
        console.table(myModule.getNewNote(myModule.students))
        break;
      case 15:
        console.table(myModule.orderAlphabetically(myModule.students))
        break;
      case 16:
        console.log(myModule.getBestStudent(myModule.students))
        break;
      case 17:
        console.log(myModule.getHigherNote(myModule.students))
        break;  
      case 18:
        console.table(myModule.giveExtraPoint(myModule.students))
        break;
    }

  } while (numberFromConsole > 0 && numberFromConsole < 19)
}

await playGame()


