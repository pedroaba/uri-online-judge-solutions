const readline = require("readline")

function calcSalary(salary, sells) {
  const bonus = sells * 0.15
  
  return (salary + bonus).toFixed(2)
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let employeeName
let salary
let sells

reader.question("", function (answer) {
  employeeName = answer  
  
  reader.question("", function (answer) {  
    salary = Number(answer)
    
    reader.question("", function (answer) { 
      sells = Number(answer)

      console.log(`TOTAL = R$ ${calcSalary(salary, sells)}`)
      reader.close()
    })
  })
})
