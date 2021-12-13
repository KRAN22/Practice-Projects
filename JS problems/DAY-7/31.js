// Write a javaScript program to print all Armstrong numbers between 1 to n.
function countNumberOfDigits(num) {
  let digit = 0;
  for (digit; num > 0; digit++) {
    num = parseInt(num / 10);
  }
  return digit;
}

// console.log(countNumberOfDigits(10) == 2);
// console.log(countNumberOfDigits(999) == 3);

function armstrongNumber(num) {
  let temp = num;
  let sum = 0;
  for (; temp > 0; ) {
    let sum1 = temp % 10;
    sum += sum1 ** countNumberOfDigits(num);
    temp = parseInt(temp / 10);
  }
  return sum == num;
}

// console.log(armstrongNumber(153) == true);

function allArmstrongNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (armstrongNumber(i)) {
      console.log(i);
    }
  }
}

allArmstrongNumber(100000);
