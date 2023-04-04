const chai = require('chai')
const expect = chai.expect

const operations = require('../operations.js')

// #region BDD tests
describe('Operations', () => {

  // Addition
  it('Should add two positifs numbers.', () => {
    const result = operations.add(5, 10)
    expect(result).to.equal(15.00)
  })
  it('Should add two negatifs numbers.', () => {
    const result = operations.add(-25, -10)
    expect(result).to.equal(-35.00)
  })
  it('Should add two opposites numbers.', () => {
    const result = operations.add(2, -25)
    expect(result).to.equal(-23.00)
  })
  it('Should add two decimal numbers.', () => {
    const result = operations.add(2.20, 3.50)
    expect(result).to.equal(5.70)
  })
  it('Should throw an error when not have two numbers.', () => {
    expect(() => operations.add(5, null)).to.throw("It's not two numbers")
  })

  // Subtraction
  it('Should subtract two numbers.', () => {
    const result = operations.subtract(10, 5)
    expect(result).to.equal(5.00)
  })
  it('Should subtract two negatifs numbers.', () => {
    const result = operations.subtract(-25, -10)
    expect(result).to.equal(-15.00)
  })
  it('Should subtract two opposites numbers.', () => {
    const result = operations.subtract(2, -25)
    expect(result).to.equal(27.00)
  })
  it('Should subtract two decimal numbers.', () => {
    const result = operations.subtract(2.20, 3.50)
    expect(result).to.equal(-1.30)
  })
  it('Should throw an error when not have two numbers.', () => {
    expect(() => operations.subtract(5, null)).to.throw("It's not two numbers")
  })

  // Multiplication
  it('Should multiply two numbers.', () => {
    const result = operations.multiply(5, 10)
    expect(result).to.equal(50.00)
  })
  it('Should multiply two negatifs numbers.', () => {
    const result = operations.multiply(-25, -10)
    expect(result).to.equal(250.00)
  })
  it('Should multiply two opposites numbers.', () => {
    const result = operations.multiply(2, -25)
    expect(result).to.equal(-50.00)
  })
  it('Should multiply two decimal numbers.', () => {
    const result = operations.multiply(2.20, 3.50)
    expect(result).to.equal(7.70)
  })
  it('Should throw an error when not have two numbers.', () => {
    expect(() => operations.multiply(5, null)).to.throw("It's not two numbers")
  })

  // Division
  it('Should divide two numbers.', () => {
    const result = operations.divide(10, 5)
    expect(result).to.equal(2.00)
  })
  it('Should divide two negatifs numbers.', () => {
    const result = operations.divide(-25, -10)
    expect(result).to.equal(2.50)
  })
  it('Should divide two opposites numbers.', () => {
    const result = operations.divide(2, -25)
    expect(result).to.equal(-0.08)
  })
  it('Should divide two decimal numbers.', () => {
    const result = operations.divide(2.20, 3.50)
    expect(result).to.equal(0.63)
  })
  it('Should throw an error when dividing by 0.', () => {
    expect(() => operations.divide(10, 0)).to.throw('Division par zéro non autorisée')
  })
  it('Should throw an error when not have two numbers.', () => {
    expect(() => operations.divide(5, null)).to.throw("It's not two numbers")
  })

  // Percentage
  it('Should calculate the percentage.', () => {
    const result = operations.percentage(50, 10)
    expect(result).to.equal(5.00)
  })
  it('Should calculate the percentage.', () => {
    const result = operations.percentage(-20, 15)
    expect(result).to.equal(-3.00)
  })
  it('Should calculate the percentage.', () => {
    const result = operations.percentage(75, -25)
    expect(result).to.equal(-18.75)
  })
  it("Should throw an error when the value it's not a numbers.", () => {
    expect(() => operations.divide(null, 15)).to.throw("The value it's not a number")
  })


  // #endregion BDD tests
  // #region TDD tests
  it('Should calculate the square of a number.', () => {
    const result = operations.square(4)
    expect(result).to.equal(16.00)
  })

  it('Should calculate the square of a number.', () => {
    const result = operations.square(-5)
    expect(result).to.equal(25.00)
  })

  it('Should calculate the square of a number.', () => {
    const result = operations.square(10.5)
    expect(result).to.equal(110.25)
  })

  it('Should calculate the square of a number.', () => {
    const result = operations.square(525)
    expect(result).to.equal(275625.00)
  })

  it('Should calculate the square root of a number.', () => {
    const result = operations.squareRoot(9)
    expect(result).to.equal(3.00)
  })

  it('Should throw an error when calculating the square root of a negative number.', () => {
    expect(() => operations.squareRoot(-4)).to.throw('Les racines carrées des nombres négatifs ne sont pas prises en charge')
  })

  it('Should throw an error when calculating the square root of a negative number.', () => {
    expect(() => operations.squareRoot(0)).to.throw('Les racines carrées des nombres négatifs ne sont pas prises en charge')
  })

  it('Should calculate the power of a number.', () => {
    const result = operations.power(2, 3)
    expect(result).to.equal(8.00)
  })

  it('Should return 1 when the exponent is 0.', () => {
    const result = operations.power(5, 0)
    expect(result).to.equal(1.00)
  })

  it('Should calculate the power with a negative exponent.', () => {
    const result = operations.power(2, -3)
    expect(result).to.equal(1 / 8)
  })

  it('Should calculate the power of a number.', () => {
    const result = operations.power(5, 8)
    expect(result).to.equal(390625.00)
  })
  // #endregion TDD tests
})
