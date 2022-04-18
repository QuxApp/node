const methods = [
  'range',
  'triangular',
  'factorial',
  'fibonacci',
  'sort',
  'unite',
  'subtract',
  'intersect',
  'exclude',
  'chunk',
  'root',
  'copy',
  'clean',
  'simplify',
  'frequency',
  'mode',
  'median',
]

let files = {}

for (method of methods) {
  files[method] = require(`./core/${method}`)
}

module.exports = files