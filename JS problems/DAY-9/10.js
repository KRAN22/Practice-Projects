// Write a javaScript program to print hollow right triangle star pattern series using for loop

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printHollowRightTriangleStar(num) {
  result = "*" + "\n";
  for (let i = 2; i < num; i++) {
    result = result + "*" + printChar(i - 2, " ") + "*" + "\n";
  }
  return result + printChar(num, "*");
}

console.log(printHollowRightTriangleStar(5));
