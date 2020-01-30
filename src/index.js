function palindrome(str) {
  //removing alpha numeric character
  //regular expression is sequence of characters
  //that define a specific search pattern.

  var reg = /[\W_]/g;

  var smallStr = str.toLowerCase().replace(reg, "");

  var reversed = str
    .split("")
    .reverse()
    .join("");
  if (reversed === smallStr) return true;
  return false;
}

console.log(palindrome("racecar"));
