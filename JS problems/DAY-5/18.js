// Write a javaScript program to find frequency of each digit in a given integer.

// function frequencyOfEachDigit(num) {
//   let temp = num;
//   for (; temp > 0; ) {
//     let sum = temp % 10;
//     temp = parseInt(temp / 10);
//     console.log(sum);
//   }
// }

// frequencyOfEachDigit(12311114511);

let n = 11234455600;
while (n != 0) {
  let num = n % 10;
  n = parseInt(n / 10);
  console.log(num);
}
