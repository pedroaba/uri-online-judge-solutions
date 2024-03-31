const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let numberA
let numberB

const FIRST_WEIGHT = 3.5
const SECOND_WEIGHT = 7.5
const TOTAL_WEIGHT = FIRST_WEIGHT + SECOND_WEIGHT

reader.question("", function (answer) {
  numberA = Number(answer)  
  
  reader.question("", function (answer) {  
    numberB = Number(answer)
    
    const sum = (FIRST_WEIGHT * numberA) + (SECOND_WEIGHT * numberB)
    const mean = sum / TOTAL_WEIGHT

    console.log(`MEDIA = ${mean.toFixed(5)}`)
    reader.close()
  })
})
