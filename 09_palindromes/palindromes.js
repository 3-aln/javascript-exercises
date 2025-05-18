const palindromes = function (string) {
  // List of characters to ignore (punctutation, whitespace)
  ignoreList = ".,! ".split('');

  let cleanedString = string.toLocaleLowerCase();

  // Remove all characters from the ignore list
  for (char of ignoreList) {
    cleanedString = removeCharacter(cleanedString, char);
  }
  
  console.log(cleanedString);

  // Test if the first half the string matches the other half in reverse.
  let halfIndex = Math.floor(cleanedString.length / 2);
  for (let i = 0; i < halfIndex; i++) {
    // console.log(i);
    // console.log(string[i]);
    // console.log(string.at(-(i + 1)));
    if (cleanedString[i] !== cleanedString.at(-(i + 1))) return false;
  }
  return true;
};

function removeCharacter(string, char) {
  return string.replaceAll(char, '');
}

// Do not edit below this line
module.exports = palindromes;
