const readline = require("readline")

function calcValueToPayPerPart(quantityOfParts, partValue) {
  
  return (quantityOfParts * partValue).toFixed(2)
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let partNumber1, quantity1, partValue1 
let partNumber2, quantity2, partValue2 

reader.question("", function (answer) {
  [partNumber1, quantity1, partValue1] = answer.split(" ").map(Number)
  
  reader.question("", function (answer) {  
    [partNumber2, quantity2, partValue2] = answer.split(" ").map(Number)

    const totalToPay = (quantity1 * partValue1) + (quantity2 * partValue2)
    console.log(`VALOR A PAGAR: R$ ${totalToPay.toFixed(2)}`)

    reader.close()
  })
})
