// Write a javaScript program to print diamond star pattern series using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function firstTriangle(num) {
  result = "";
  let sum = parseInt(Math.ceil(num / 2));
  for (let i = 1; i <= num; i += 2) {
    result = result + printChar(sum--, " ") + printChar(i, "*") + "\n";
  }
  return result;
}

function secondTriangle(num) {
  num -= 2;
  result = "";
  let temp = 2;
  for (num; num >= 1; num -= 2) {
    result = result + printChar(temp, " ") + printChar(num, "*") + "\n";
    temp += 1;
  }
  return result;
}

function printDiamondStar(num) {
  return firstTriangle(num) + secondTriangle(num);
}

console.log(printDiamondStar(9));
console.log(printDiamondStar(11));
