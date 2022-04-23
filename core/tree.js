function tree(spread, depth, callback) {
  const list = []
  for (n = 0; n < spread ** depth; n++) {
    for (i = 0; i < depth; i++) {
      list[i] = Math.floor((n * spread ** (i + 1) / (spread ** depth))) % spread
    }
    callback(list, n)
  }
}

module.exports = tree