const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  let bigger = Number.MIN_SAFE_INTEGER
  const numbers = answer.split(" ").map(Number)

  bigger = numbers.reduce((acc, num) => {
    if (acc < num) {
      return num
    }

    return acc
  }, bigger)

  console.log(`${bigger} eh o maior`)
  reader.close()
})
