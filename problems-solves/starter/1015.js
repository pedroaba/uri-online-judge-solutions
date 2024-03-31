const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  const pointsOne = answer.split(" ").map(Number)

  reader.question("", function (answer) {
    const pointsTwo = answer.split(" ").map(Number)

    const distance = Math.sqrt(
      Math.pow(
        pointsTwo[0] -
        pointsOne[0],
        2
      ) +
      Math.pow(
        pointsTwo[1] -
        pointsOne[1],
        2
      )
    )
      
    console.log(distance.toFixed(4))
    reader.close()
  })
})
