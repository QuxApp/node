function partition(list, rule) {
  if (typeof rule === 'function') {
    const matched = list.filter(rule)
    return [matched, list.filter(x => !matched.includes(x))]
  } else if (typeof rule === 'string') {
    const matched = list.filter(x => x[rule])
    const other = list.filter(x => !matched.includes(x))
    return [matched, other]
  } else if (Array.isArray(rule)) {
    const matched = list.filter((x) => {
      return x[rule[0]] === rule[1]
    })
    const other = list.filter(x => !matched.includes(x))
    return [matched, other]
  } else if (typeof rule === 'object') {
    const matched = list.filter((x) => {
      let match = true
      for (const [key, value] of Object.entries(rule)) {
        if (x[key] !== rule[key]) {
          match = false
        }
      }
      return match
    })
    const other = list.filter(x => !matched.includes(x))
    return [matched, other]
  }
}

module.exports = partition