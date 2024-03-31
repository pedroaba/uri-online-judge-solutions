const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("", function (answer) {
  const valueInCents = Number(answer)

  const quantityOfNotes = []
  const notes = [100, 50, 20, 10, 5, 2, 1]

  let buffer = valueInCents
  notes.forEach((currentNote) => {
    quantityOfNotes.push(
      Math.floor(buffer / currentNote)
    )

    buffer %= currentNote
  })

  console.log(valueInCents)
  quantityOfNotes.forEach((quantity, index) => {
    const currentNote = notes[index]
    console.log(`${quantity} nota(s) de R$ ${currentNote},00`)
  })
  reader.close()
})
