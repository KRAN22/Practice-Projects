// Write a function which accepts a number below 10 and returns the appropirate word in english.
// Ex:If the number is 1 then the result should be `One`
// for 2 => TWO
function theNumberToWord(num) {
  if (num == 1) {
    return "ONE";
  }
  if (num == 2) {
    return "TWO";
  }
  if (num == 3) {
    return "THREE";
  }
  if (num == 4) {
    return "FORE";
  }
  if (num == 5) {
    return "FIVE";
  }
  if (num == 6) {
    return "SIX";
  }
  if (num == 7) {
    return "SEVEN";
  }
  if (num == 8) {
    return "EIGHT";
  }
  if (num == 9) {
    return "NINE";
  }
  if (num == 10) {
    return "TEN";
  } else {
    return "your number is gether then 10";
  }
}

console.log(theNumberToWord(10) == "TEN");
console.log(theNumberToWord(11) == "your number is gether then 10");
console.log(theNumberToWord(5) == "FIVE");
