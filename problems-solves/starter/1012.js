const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const PI = 3.14159
const triangleArea = (base, height) => (base * height) / 2
const circleArea = (r) => PI * Math.pow(r, 2)
const squareArea = (side) => Math.pow(side, 2)
const trapeziumArea = (biggerBase, smallerBase, height) => ((biggerBase + smallerBase) * height) / 2
const rectangleArea = (base, height) => base * height

reader.question("", function (answer) {
  const [A, B, C] = answer.split(" ").map(Number)

  console.log(`TRIANGULO: ${triangleArea(A, C).toFixed(3)}`)
  console.log(`CIRCULO: ${circleArea(C).toFixed(3)}`)
  console.log(`TRAPEZIO: ${trapeziumArea(A, B, C).toFixed(3)}`)
  console.log(`QUADRADO: ${squareArea(B).toFixed(3)}`)
  console.log(`RETANGULO: ${rectangleArea(A, B).toFixed(3)}`)
  reader.close()
})
