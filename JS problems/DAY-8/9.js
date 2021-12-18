// Write a javaScript program to print right triangle star pattern series using for loop

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function rightTriangleStarPattern(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result = result + printChar(i, "*") + "\n";
  }
  return result;
}

console.log(rightTriangleStarPattern(5));
console.log(rightTriangleStarPattern(7));
