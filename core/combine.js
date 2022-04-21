function combine(list) {
  let snow = {
    
  }
  for (i = 0; i < list.length; i++) {
    for (const [key, value] of Object.entries(list[i])) {
      if (snow[key] === undefined) {
        snow[key] = value
      }
    }
  }
  return snow
}

module.exports = combine