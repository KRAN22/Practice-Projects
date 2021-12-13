// Write a javaScript program to calculate factorial of a number.

function factorialOfaNumber(num) {
  let temp = num;
  for (let i = 1; i < num; i++) {
    temp = temp * i;
  }
  return temp;
}

console.log(factorialOfaNumber(5));

// OR

function factorialOfaNumber1(num) {
  let temp = num;
  for (let i = 1; i < num; i++) {
    temp *= num - i;
  }
  return temp;
}

console.log(factorialOfaNumber1(5));
