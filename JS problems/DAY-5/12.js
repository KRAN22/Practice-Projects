// Write a javaScript program to find first and last digit of a number.

function findFirstAndLastNumber(num) {
  let lastDigit = num % 10;
  for (; num >= 10; ) {
    num = parseInt(num / 10);
  }
  let firstDigit = num;
  return { firstDigit, lastDigit };
}

console.log(findFirstAndLastNumber(3234));
