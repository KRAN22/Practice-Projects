// Write a javaScript program to find sum of all odd numbers between 1 to n.

function sumOfAllOddNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(sumOfAllOddNumber(10));
