// Write a javaScript program to calculate sum of digits of a number.

function sumOfDigit(num) {
  let sumOfDigit = 0;
  for (; num > 0; ) {
    let sum = num % 10;
    sumOfDigit += sum;
    num = parseInt(num / 10);
  }
  return sumOfDigit;
}

console.log(sumOfDigit(12344));
