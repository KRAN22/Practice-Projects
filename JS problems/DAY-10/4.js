// Write a javaScript program to find maximum and minimum element in an array.

function findMaxAndMinOFArray(array) {
  max = array[0];
  min = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return [max, min];
}

console.log(findMaxAndMinOFArray([102, 50, 1, 22, 34, 5]));
console.log(findMaxAndMinOFArray([10, 500, 0, 220, 934, 599]));
console.log(findMaxAndMinOFArray([102, 5560, 91, 220, 340, 500]));
