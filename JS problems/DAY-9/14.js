// Write a javaScript program to print equilateral triangle or Pyramid star pattern series of n rows using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printEquilateralTriangleStar(num) {
  result = "";
  let sum = parseInt(Math.ceil(num / 2));
  for (let i = 1; i <= num; i += 2) {
    result = result + printChar(sum--, " ") + printChar(i, "*") + "\n";
  }
  return result;
}

console.log(printEquilateralTriangleStar(9));
