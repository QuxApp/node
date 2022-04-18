const qux = require('./quxapp') // Import module

// Range function like python that can also go backwards
for (n of qux.range(10, 0)) {
  console.log(n)
}

for (n of qux.range(0, 10, 2)) {
  console.log(n)
}

var result = null

// Math sequences
result = qux.triangular(6)

result = qux.factorial(4)
console.log(result)

result = qux.fibonacci(8)
console.log(result)

// Array operators
var first = ['foo', 'bar', 'baz']
var second = ['bar', 'qux']

result = qux.unite(first, second)
console.log(result)

result = qux.subtract(first, second)
console.log(result)

result = qux.intersect(first, second)
console.log(result)

result = qux.exclude(first, second)
console.log(result)

// Performing merge sort
var numbers = [5, 2, 1, 3, 0, 4, 6, 7]
numbers = qux.sort(numbers)
console.log(numbers)

// Splitting an array into chunks
const list = ['foo', 'bar', 'baz', 'qux']
result = qux.chunk(list, 2)
console.log(result)
result = qux.chunk(list, 3)
console.log(result)

// Nth root of a number
result = qux.root(4, 16)
console.log(result)

// Copying a list to another list
result = qux.copy(list, 1, 4, 2)
console.log(result)

// Cleaning a list of falsy values
const dirty = [0, 1, 'foo', false, NaN, '']
result = qux.clean(dirty)
console.log(result)

// Removing duplicate values from a list
const survey = ['foo', 'bar', 'foo', 'qux', 'baz', 'qux']
result = qux.simplify(survey)
console.log(result)

// Gettinng a frequency map
result = qux.frequency(survey)
console.log(result)

// Statistics stuff
result = qux.mode(survey)
console.log(result)

result = qux.median(numbers) // The list `numbers` is already sorted
console.log(result)