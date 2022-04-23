function chance(spread, depth) {
  const tree = []
  for (n = 0; n < spread ** depth; n++) {
    const list = []
    for (i = 0; i < depth; i++) {
      list[i] = Math.floor((n * spread ** (i + 1) / (spread ** depth))) % spread
    }
    tree[n] = list
  }
  return tree
}

module.exports = chance