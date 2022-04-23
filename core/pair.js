function pair(keys, values) {
  let pairs = {}
  for (i =  0; i < keys.length; i++) {
    pairs[keys[i]] = values[i]
  }
  return pairs
}

module.exports = pair