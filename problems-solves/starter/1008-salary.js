const readline = require("readline")

function calcSalary(workingHours, salaryPerHour) {  
  return (salaryPerHour * workingHours).toFixed(2)
}

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let employeeNumber
let workingHours
let salaryPerHour

reader.question("", function (answer) {
  employeeNumber = Number(answer)  
  
  reader.question("", function (answer) {  
    workingHours = Number(answer)
    
    reader.question("", function (answer) { 
      salaryPerHour = Number(answer)

      console.log(`NUMBER = ${employeeNumber}`)
      console.log(`SALARY = U$ ${calcSalary(workingHours, salaryPerHour)}`)
      reader.close()
    })
  })
})
