const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const PI = 3.14159
const volume = (r) => (4 / 3) * PI * Math.pow(r, 3)

reader.question("", function (answer) {
  const r = Number(answer)

  console.log(`VOLUME = ${volume(r).toFixed(3)}`)
  reader.close()
})

