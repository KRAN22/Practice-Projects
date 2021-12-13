function isPrime(num) {
  if (noOfFactors(num) == 2) {
    return true;
  } else {
    return false;
  }
}

function noOfFactors(num) {
  let count = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      count = count + 1;
    }
  }
  return count + 1;
}

console.log(isPrime(10) == false);
console.log(isPrime(5) == true);
