// Write a javaScript program to find sum of all array elements.

function sumOfAllArray(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
}

console.log(sumOfAllArray([10, 40, 50, 60, 100]));
console.log(sumOfAllArray([190, 345, 150, 500, 200, 100]));
