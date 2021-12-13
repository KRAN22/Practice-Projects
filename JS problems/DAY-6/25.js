// Write a javaScript program to find LCM of two numbers.

function findLcm(num1, num2) {
  let max = num1 > num2 ? num1 : num2;
  let i = max;
  while (1) {
    if (i % num1 == 0 && i % num2 == 0) {
      return i;
    }
    i += max;
  }
}

console.log(findLcm(30, 20));
