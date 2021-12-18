// Write a javaScript program to input elements in array and find reverse of array.

function reverse(array) {
  let reverse = [];
  let length = array.length;
  for (i = 0; length >= 1; i++) {
    reverse[i] = array[length - 1];
    length--;
  }
  return reverse;
}

console.log(reverse([10, 20, 30, 40, 50, 60]));
