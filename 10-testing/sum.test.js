const { sum: mySum, sumString: mySumString } = require('./sum')

const sum = jest.fn(mySum)
const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Before execute all tests')
})

beforeEach(() => {
  console.log('Before execute every tests')
})

afterEach(() => {
  console.log('After execute every tests')
})

afterAll(() => {
  console.log('After execute all tests')
})

describe('Sum test', () => {
  test('Testing sum', () => {
    console.log('Testing sum')
    expect(sum(4, 5)).toBe(9)
    expect(sum(1, 2)).toBe(3)
    expect(sum(-10, 2)).toBe(-8)
    expect(sum(2, 'ali')).toBeNaN()
    expect(sum(2, NaN)).toBeNaN()
  })

  test('Testing sum string', () => {
    console.log('Testing sum string')
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString(1, 10)).toBe('Sum is 11')
    expect(sumString(2, 'ali')).toBe('Sum is NaN')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith(1, 10)
    expect(sumString).toBeCalledWith(2, 'ali')
  })
})

// describe('My test', () => {
//   test('Test 1', () => {
//     expect(false).toBeFalsy()
//     expect(10).toBeTruthy()
//     expect(2 - 'salam').toBeNaN()
//   })

//   test('Test 2', () => {
//     expect(1 + 5).toBe(6)
//   })
// })

// if (sum(1, 2) !== 3) {
//   throw 'Test fail'
// }

// if (sum(4, 5) !== 9) {
//   throw 'Test fail'
// }

// if (sum('Hi ', 'Ali') !== 'Hi Ali') {
//   throw 'Test fail'
// }

// console.log('Tests pass')
