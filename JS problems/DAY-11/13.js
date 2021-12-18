// Write a JavaScript program to right rotate an array by n position.

function rightRotate(array, position) {
  let right = [];
  length = array.length - position;
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (i < position) {
      right[i] = array[length++];
    } else if (i >= position) {
      right[i] = array[count];
      count++;
    }
  }
  return right;
}

console.log(rightRotate([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(rightRotate([1, 2, 3, 4, 5, 6, 7, 8], 4));
