// Write a javaScript program to enter a number and print its reverse.

function numberPrintInReverse(num) {
  let reverse = 0;
  for (; num > 0; ) {
    reverse = reverse * 10 + (num % 10);
    num = parseInt(num / 10);
  }
  return reverse;
}

console.log(numberPrintInReverse(123455));
