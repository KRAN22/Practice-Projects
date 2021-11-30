// Write a function to check given number is even or odd. If the given number is even then return Even other wise return Odd.

function evenOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

let result = evenOdd(10);
console.log(result);
