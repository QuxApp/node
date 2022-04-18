function simplify(duplicates) {
  const list = []
  duplicates.filter(x => list.includes(x))
  return list 
} 

module.exports = simplify