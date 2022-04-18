function fibonacci(n) {
  const seq = [0, 1]
  for (i = 1; i < n; i++) {
    seq.push(seq[i] + seq[i - 1])
  }
  return seq
}

module.exports = fibonacci