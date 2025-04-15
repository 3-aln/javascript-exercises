const sumAll = function(int1, int2) {
  // Disallow non-integers
  if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
  // Disallow negative integers
  if (int1 < 0 || int2 < 0) return "ERROR";
  
  // Identify which number is lower and which is higher
  let lowerInt, upperInt;
  if (int1 <= int2) {
    lowerInt = int1;
    upperInt = int2;
  } else {
    lowerInt = int2;
    upperInt = int1;
  }

  // Sum numbers and return the result
  let sum = 0;
  for (let n = lowerInt; n <= upperInt; n++) {
    sum += n;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
