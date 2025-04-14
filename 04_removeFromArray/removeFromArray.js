const removeFromArray = function(array, ...itemsToRemove) {
  for (let i = 0; i < array.length; i++) {
    for (const itemToRemove of itemsToRemove) {
      if (array[i] === itemToRemove) {
        // Remove item i and shift the remaining arrays items to the left
        array.splice(i, 1);
        // Since the next item has been shifted into array index i, 
        // check this same array index next iteration.
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
