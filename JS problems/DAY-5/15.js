// Write a javaScript program to calculate product of digits of a number.

function productOfDigit(num) {
  let productOfDigit = 1;
  for (; num > 0; ) {
    let sum = num % 10;
    productOfDigit *= sum;
    num = parseInt(num / 10);
  }
  return productOfDigit;
}

console.log(productOfDigit(12344));
console.log(productOfDigit(23434));
