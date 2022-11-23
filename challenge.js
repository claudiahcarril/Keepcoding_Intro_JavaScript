/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
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

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];


// Pedir número de ejercicio
const rl = readline.createInterface({
  input: process.stdin,       //La entrada de datos se hace por consola
  output: process.stdout      //La salida de datos se hace por consola
});

function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
      rl.question('Introduce el número: ', (num) => {    //Método que recibe 2 parámetros (string y función callback)
          rl.pause();
          if (isInt(num)) {
              resolve(num)
          } else {
              reject("Introduce un número")
          }

      })  
  })

  return promise
}




// const numberFromConsole = await getNumberFromConsole()






// Mostrar número de ejercicio
switch(number) {
  case 0:
  case 1:
    console.table()
    break;
}