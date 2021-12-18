// Write a javaScript program to input elements in array and count negative elements in array.

function countNegativeElements(array) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegativeElements([1, -38, -37, 74, -22, -77, 99, -44, 77]));
