const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let numberA
let numberB

reader.question("", function (answer) {
  numberA = Number(answer)  
  
  reader.question("", function (answer) {  
    numberB = Number(answer)
    
    console.log(`SOMA = ${numberA + numberB}`)
    reader.close()
  })
})
