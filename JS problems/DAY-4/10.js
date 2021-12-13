// Write a javaScript program to count number of digits in a number.

// function number(num) {
//   let digit = 0;
//   do {
//     num = parseInt(num / 10);
//     digit++;
//   } while (num > 0);
//   return digit;
// }

// console.log(number(12345));

function countNumberOfDigits(num) {
  let digit = 0;
  for (digit; num > 0; digit++) {
    num = parseInt(num / 10);
  }
  return digit;
}

console.log(countNumberOfDigits(23456) == 5);
console.log(countNumberOfDigits(23456777));
console.log(countNumberOfDigits(2) == 1);
