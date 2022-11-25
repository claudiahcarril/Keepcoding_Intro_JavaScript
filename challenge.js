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
  let numberFromConsole
  do {
    do {
      try {
        myModule.showRequirements()
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
        console.table(myModule.eliminateLastStudent(myModule.students))
        break;
      case 5:
        console.table(myModule.eliminateRandomStudent(myModule.students))
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


