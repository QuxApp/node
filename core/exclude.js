function exclude(first, second) {
  return first.filter(x => !second.includes(x)).concat(second.filter(x => !first.includes(x)))
}

module.exports = exclude