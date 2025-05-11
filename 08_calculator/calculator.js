const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, number) => product * number, 1);
};

const power = function(base, power) {
	return base ** power;
};

const factorial = function(num) {
  let result = 1;

  // Keep a running product of numbers from 1 to the inputted number.
  // 0! will not enter this loop - in that case the result correctly remains 1.
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
