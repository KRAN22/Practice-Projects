// Write a javaScript program to print mirrored right triangle star pattern series using for loop

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printMirroredRightTriangle(num) {
  result = "";
  for (let i = 1; i <= num; i++) {
    result = result + printChar(num - i + 1, " ") + printChar(i, "*") + "\n";
  }
  return result;
}

console.log(printMirroredRightTriangle(5));
console.log(printMirroredRightTriangle(7));
