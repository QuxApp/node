function unite(first, second) {
  return first.concat(second.filter(x => !first.includes(x)))
}

module.exports = unite