const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  const distance = Number(answer)

  reader.question("", function (answer) {
    const quantity = Number(answer)
    const consume = distance / quantity

    console.log(`${consume.toFixed(3)} km/l`)    
    reader.close()
  })
})
