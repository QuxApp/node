function subtract(first, second) {
  return first.filter(x => !second.includes(x))
}

module.exports = subtract