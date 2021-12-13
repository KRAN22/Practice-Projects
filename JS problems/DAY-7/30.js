// Write a javaScript program to check whether a number is Armstrong number or not.

function countNumberOfDigits(num) {
  let digit = 0;
  for (digit; num > 0; digit++) {
    num = parseInt(num / 10);
  }
  return digit;
}

function findANumber(num) {
  let temp = num;
  let sum = 0;
  for (; temp > 0; ) {
    let sum1 = temp % 10;
    sum += sum1 ** countNumberOfDigits(num);
    temp = parseInt(temp / 10);
  }
  return sum;
}

function armstrongNumber(num) {
  if (num === findANumber(num)) {
    console.log(num + " is armstrong number");
  } else {
    console.log(num + " is not armstrong number");
  }
}

armstrongNumber(153);
armstrongNumber(154);
