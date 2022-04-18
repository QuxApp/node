function match(list, rule) {
  if (typeof rule === 'function') {
    return list.filter(rule)
  } else if (typeof rule === 'string') {
    const matched = list.filter(x => x[rule])
    return matched
  } else if (Array.isArray(rule)) {
    const matched = list.filter((x) => {
      return x[rule[0]] === rule[1]
    })
    return matched
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
    return matched
  }
}

module.exports = match