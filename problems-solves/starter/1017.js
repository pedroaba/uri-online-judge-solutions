const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  const time = Number(answer)

  reader.question("", function (answer) {
    const speed = Number(answer)

    const distance = speed * time
    const consume = distance / 12
      
    console.log(consume.toFixed(3))
    reader.close()
  })
})
