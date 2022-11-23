import {students, showStudents} from './modules.js'
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
            resolve(num)
          } else {
            reject('Debes introducir un número del 1 al 18')
          }
      })  
  }) 
  return promise
}


async function playGame() {
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
        showStudents(students)
        break;
      case 2:
        console.table([1,2,3,4], [1,2,3,4])
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;  
      case 11:
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
    // Mostrar número de ejercicio
  
  } while (numberFromConsole > 0 && numberFromConsole < 19)

}


playGame()


