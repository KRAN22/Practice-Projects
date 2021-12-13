// Write a javaScript program to print all Prime numbers between 1 to n.

function isPrime(num) {
  let count = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      count = count + 1;
    }
  }
  return count == 1;
}

function printNNumber(num) {
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printNNumber(100);
