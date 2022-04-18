function chunk(list, n) {
  ((!n) ? n = 1 : n = Math.abs(n))
  const chunks = []
  for (i = 0; i < list.length; i+= n) {
    chunks.push(list.slice(i, i + n))
  }
  return chunks
}

module.exports = chunk