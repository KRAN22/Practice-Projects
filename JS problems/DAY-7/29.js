// Write a javaScript program to find all prime factors of a number.

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      count = count + 1;
    }
  }
  return count == 1;
}

function primeFactorsOfaNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      if (num % i == 0) {
        console.log(i);
      }
    }
  }
}

primeFactorsOfaNumber(15);
