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
const first = ['foo', 'bar', 'baz']
const second = ['bar', 'qux']
const third = ['bar', 'baz']

result = qux.unite(first, second, third)
console.log(result)

result = qux.subtract(first, second, third)
console.log(result)

result = qux.intersect(first, second, third)
console.log(result) // Tip: use qux.siplify to remove duplicates

result = qux.exclude(first, second, third)
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

// Separating objects in a list based on rules
// Returns something like [matchedValues, otherValues]
const users = [
  {
    name: 'John',
    age: 32,
    male: true
  },
  {
    name: 'Jane',
    age: 16,
    male: false
  },
  {
    name: 'Joe',
    age: 4,
    male: true
  },
]

// Function rule
result = qux.partition(users, item => item.age > 13)
console.log(result)

// Matches all property values
result = qux.partition(users, { age: 32, male: true })
console.log(result)

// Matches one property value
result = qux.partition(users, ['name', 'Jane'])
console.log(result)

// Property is not falsy
result = qux.partition(users, 'male')
console.log(result)

// This is a faster version of partition but only returns matched objects
result = qux.match(users, item => item.age > 13)
console.log(result)

// Random decimal function with min and max
console.log(qux.random(10, 100))
console.log(Math.floor(qux.random(10, 100))) // Use floor to get integers

// Turning an array of objects into a single object
// It replaces undefined properties and ignores others
result = qux.combine([{ a: 1 }, { b: 2 }, { a: 3 }])
console.log(result)

result = qux.fill(numbers, 'foo', 0, 8, 2)
console.log(result)

// XOR
result = qux.xor('quxapp', 'apply')
console.log(result)
result = qux.xor(2, 3)
console.log(result)
result = qux.xor([0, 1], [1, 2])
console.log(result)

// Zip and Pair
result = qux.pair(['a', 'b'], ['alpha', 'beta'])
console.log(result)

result = qux.zip(['a', 'b'], [0, 1], ['alpha', 'beta'])
console.log(result)

// All possibilities displayed
qux.tree(2, 3, (tree, index) => {
  console.log(tree, index)
})

// Returns nested arrays for each possibility branch
result = qux.chance(3, 2)
console.log(result)