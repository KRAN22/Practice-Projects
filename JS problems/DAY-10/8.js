// Write a javaScript program to copy all elements from an array to another array.

function copyAllElementsFromAnArray(array) {
  let add = [];
  for (i = 0; i < array.length; i++) {
    add[i] = array[i];
  }
  return add;
}
console.log(copyAllElementsFromAnArray([1, 2, 3, 4, 5, 5, 6, 77]));
