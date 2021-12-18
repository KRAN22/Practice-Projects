// Write a javaScript program to print the mirrored half diamond star pattern using for loop

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function _1stHalfOfDiamondStar(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    result = result + printChar(num - i, " ") + printChar(i, "*") + "\n";
  }
  return result;
}
function _2ndHalfOfDiamondStar(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    result = result + printChar(i, " ") + printChar(num - i, "*") + "\n";
  }
  return result;
}

function mirroredHalfDiamondStar(num) {
  return _1stHalfOfDiamondStar(num) + _2ndHalfOfDiamondStar(num);
}

console.log(mirroredHalfDiamondStar(5));
