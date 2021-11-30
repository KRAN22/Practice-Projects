// write a function which returns sum of squares of n numbers.

function squaresOfN(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

var results = squaresOfN(10);
console.log(results);
