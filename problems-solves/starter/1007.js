const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let numberA
let numberB
let numberC
let numberD

const difference = (a, b, c, d) => (a * b) - (c * d)

reader.question("", function (answer) {
  numberA = Number(answer)  
  
  reader.question("", function (answer) {  
    numberB = Number(answer)
    
    reader.question("", function (answer) { 
      numberC = Number(answer)
      
      reader.question("", function (answer) {  
        numberD = Number(answer)

        console.log(`DIFERENCA = ${difference(numberA, numberB, numberC, numberD)}`)
        reader.close()
      })
    })
  })
})
