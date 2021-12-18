// Write a javascript program to print inverted/mirrored rhombus star pattern series using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printRhombusStarPattern(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    result = result + printChar(i, " ") + printChar(num, "*") + "\n";
  }
  return result;
}
console.log(printRhombusStarPattern(5));
