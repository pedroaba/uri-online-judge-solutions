const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  const distance = Number(answer)

  const minutes = (60 * distance) / 30

  console.log(`${minutes} minutos`)
  reader.close()
})
