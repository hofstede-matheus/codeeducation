const names = [
  "João",
  "Pedro",
  "Matheus",
  "Paulo",
  "Julia",
  "Amanda",
  "Clara",
  "Flávia",
  "José",
  "Ana",
  "Laís"
]

function getRandomName() {
  const randomPosition = Math.floor(Math.random() * names.length)
  return names[randomPosition]
}

module.exports = { getRandomName };

