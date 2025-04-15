const leapYears = function(year) {
  // Years divisible by 4
  if (year % 4 == 0) {
    // Years divisible by 100
    if (year >= 100 && year % 100 == 0) {
      // Years divisible by 400
      if (year >= 400 && year % 400 == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  // Years not divisible by 4
  return false;
};

// Do not edit below this line
module.exports = leapYears;
