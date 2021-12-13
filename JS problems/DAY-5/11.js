// Write a javaScript program to find sum of first and last digit of a number.

// let sum = 123456;
// console.log(parseInt(sum));
// sum = sum / 10;
// console.log(parseInt(sum));
// sum = sum / 10;
// console.log(parseInt(sum));
// sum = sum / 10;
// console.log(parseInt(sum));
// sum = sum / 10;
// console.log(parseInt(sum));
// sum = sum / 10;
// console.log(parseInt(sum));

function sumOfFirstAndLastNumber(num) {
  let lastDigit = num % 10;
  for (; num >= 10; ) {
    num = parseInt(num / 10);
  }
  return num + lastDigit;
}

console.log(sumOfFirstAndLastNumber(10034));
