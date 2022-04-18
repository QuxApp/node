function copy(list, start, end, increment) {
  const copy = []
  if (end >= start) {
    ((!increment) ? increment = 1 : increment = Math.abs(increment))
    for (i = start; i < end; i += increment) {
      copy.push(list[i])
    }
  } else {
    ((!increment) ? increment = -1 : increment = -Math.abs(increment))
    for (i = start; i > end; i += increment) {
      copy.push(list[i])
    }
  }
  return copy
}

module.exports = copy