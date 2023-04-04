// #region BDD tests
function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  if (b === 0) {
    throw new Error('Division par zéro non autorisée')
  }
  return a / b
}

function percentage (a, b) {
  return (a * b) / 100
}
// #endregion BDD tests
// #region TDD tests
function square (a) {
  return a * a
}

function squareRoot (a) {
  if (a < 0) {
    throw new Error('Les racines carrées des nombres négatifs ne sont pas prises en charge')
  }

  let precision = 0.0001;
  let x = a;
  let y = 1.0;
  while (x - y > precision) {
    x = (x + y) / 2;
    y = a / x;
  }
  return parseFloat(x).toFixed(2);
}

function power (base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent < 0) {
    return 1 / power(base, -exponent);
  }
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
  }
  return parseFloat(result).toFixed(2);
}
// #endregion TDD tests

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  square,
  squareRoot,
  power
}
