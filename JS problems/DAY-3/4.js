// Write a function to return max of two numbers.

function maxOfTwoNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumber(11, 8) == 11);
console.log(maxOfTwoNumber(18, 28) == 28);
console.log(maxOfTwoNumber(11, 11) == 11);
