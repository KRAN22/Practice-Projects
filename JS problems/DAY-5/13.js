// Write a javaScript program to swap first and last digits of a number.

function swapFirstAndLastDigits(num) {
  let lastDigit = num % 10;
  while (num >= 10) {
    num = parseInt(num / 10);
  }
  let firstDigit = num;
  [firstDigit, lastDigit] = [lastDigit, firstDigit];
  return { lastDigit, firstDigit };
}

console.log(swapFirstAndLastDigits(2345));
