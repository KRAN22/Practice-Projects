// Write a javaScript program to find power of a number using for loop.

function powerOfaNumber(num, exponent) {
  console.log(num ** exponent);
}

powerOfaNumber(2, 5);

// OR

function powerOfaNumber2(num, exponent) {
  let power = 1;
  for (let i = 1; i <= exponent; i++) {
    power = power * num;
  }
  return power;
}
console.log(powerOfaNumber2(5, 2));
