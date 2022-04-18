function mode(data) {
  const chart = new Map()
  for (item of data) {
    const value = chart.get(item)
    if (value) {
      chart.set(item, value + 1)
    } else {
      chart.set(item, 1)
    }
  }
  const max = Math.max(...chart.values())
  return [...chart.keys()].filter(x => chart.get(x) === max)
}

module.exports = mode