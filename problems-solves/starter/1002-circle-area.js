const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (r) {
  const PI = 3.14159

  const area = PI * Math.pow(Number(r), 2)
  console.log(`A=${area.toFixed(4)}`)

  reader.close()
})
