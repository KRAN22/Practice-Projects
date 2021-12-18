// Write a javaScript program to print hollow mirrored right triangle star pattern of n rows using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printHollowMirroredRightTriangle(num) {
  result = printChar(num, " ") + "*" + "\n";
  for (let i = 2; i < num; i++) {
    result =
      result +
      printChar(num - i + 1, " ") +
      "*" +
      printChar(i - 2, " ") +
      "*" +
      "\n";
  }
  return result + " " + printChar(num, "*");
}

console.log(printHollowMirroredRightTriangle(5));
