function simplify(duplicates) {
  const list = []
  for (duplicate of duplicates) {
    if (!list.includes(duplicate)) list.push(duplicate)
  }
  duplicates.filter(x => list.includes(x))
  return list 
} 

module.exports = simplify