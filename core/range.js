function range(start, end, increment) {
  const list = []
  if (end >= start) {
    ((!increment) ? increment = 1 : increment = Math.abs(increment))
    for (i = start; i < end; i += increment) {
      list.push(i)
    }
  } else {
    ((!increment) ? increment = -1 : increment = -Math.abs(increment))
    for (i = start; i > end; i += increment) {
      list.push(i)
    }
  }
  return list
}

module.exports = range