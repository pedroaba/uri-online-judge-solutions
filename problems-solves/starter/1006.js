const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let numberA
let numberB
let numberC

const FIRST_WEIGHT = 2
const SECOND_WEIGHT = 3
const THIRD_WEIGHT = 5
const TOTAL_WEIGHT = FIRST_WEIGHT + SECOND_WEIGHT + THIRD_WEIGHT

reader.question("", function (answer) {
  numberA = Number(answer)  
  
  reader.question("", function (answer) {  
    numberB = Number(answer)
    
    reader.question("", function (answer) { 
      numberC = Number(answer)

      const sum = (FIRST_WEIGHT * numberA) + (SECOND_WEIGHT * numberB) + (THIRD_WEIGHT * numberC)
      const mean = sum / TOTAL_WEIGHT
  
      console.log(`MEDIA = ${mean.toFixed(1)}`)
      reader.close()
    })
  })
})
