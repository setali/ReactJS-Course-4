function sum (a, b) {
  return +a + +b
}

function sumString(a, b) {
  return `Sum is ${sum(a, b)}`
}

// sum(2, '5')
// console.log(sumString(2,3))

module.exports = {
  sum, 
  sumString
}
