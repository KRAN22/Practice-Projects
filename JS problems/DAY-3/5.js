// Write a function to return max of three numbers.

function maxOfThreeNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
console.log(maxOfThreeNumber(13, 9, 17) == 17);
console.log(maxOfThreeNumber(13, 19, 17) == 19);
console.log(maxOfThreeNumber(21, 9, 17) == 21);
