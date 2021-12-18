// Write a javaScript program to print inverted right triangle star pattern series using for loop.

function printChar(num, char) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printInvertedRightTriangleStar(num) {
  temp = num;
  result = "";
  for (temp; temp >= 1; temp--) {
    result = result + printChar(temp, "*") + "\n";
  }
  return result;
}

console.log(printInvertedRightTriangleStar(5));
