// Write a javascript program to find HCF (GCD) of two numbers.
// let num1 = 42;
// let num2 = 30;
// let temp = num1 % num2;
// let temp1 = num2 % temp;

// let temp2 = temp % temp1;

// console.log(temp2);

// let min = num1 < num2 ? num1 : num2;

// console.log(min);

function findHCF(num1, num2) {
  let hcf = 1;
  let min = num1 < num2 ? num1 : num2;
  for (let i = 1; i <= min / 2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      hgf = i;
    }
  }
  return hcf;
}

console.log(findHCF(30, 42));
