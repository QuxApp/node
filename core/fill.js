function fill(list, item, start, end, inc) {
  const filled = list
  for (i = start; i < end; i += inc) {
    filled[i] = item
  }
  return filled
}

module.exports = fill