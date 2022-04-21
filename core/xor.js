function xor(first, second) {
  if (typeof first === 'string' && typeof second === 'string') {
    const one = first.split('')
    const two = second.split('')
    const list = one.filter(x => !two.includes(x)).concat(two.filter(x => !one.includes(x)))
    return list.join('')
  } else if (typeof first === 'number' && typeof second === 'number') {
    return first ^ second
  } else if (Array.isArray(first) && Array.isArray(second)) {
    return first.filter(x => !second.includes(x)).concat(second.filter(x => !first.includes(x)))
  }
}

module.exports = xor