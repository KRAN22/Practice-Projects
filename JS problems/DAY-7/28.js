// Write a C program to find sum of all prime numbers between 1 to n.
function isPrime(num) {
  let count = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      count = count + 1;
    }
  }
  return count == 1;
}

function sumOfNPrimeNumber(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfNPrimeNumber(10));
