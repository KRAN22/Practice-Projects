// Write a C program to check whether a number is palindrome or not.

function numberPrintInReverse(num) {
  let reverse = 0;
  let temp = num;

  for (; temp > 0; ) {
    reverse = reverse * 10 + (temp % 10);
    temp = parseInt(temp / 10);
  }
  if (num == reverse) {
    return reverse + " is palindrome number";
  } else {
    return reverse + " is not a palindrome number";
  }
}

console.log(numberPrintInReverse(12321));
console.log(numberPrintInReverse(12345));
