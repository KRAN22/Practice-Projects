// Write a javascript program to find sum of all even numbers between 1 to n.

function sumOfAllEvenNumber(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(sumOfAllEvenNumber(10));
