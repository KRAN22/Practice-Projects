// Write a JavaScript program to left rotate an array by n position.

function leftRotate(array, position) {
  let rotate = [];
  length = array.length - position;
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (i >= position) {
      rotate[count] = array[i];
      count++;
    } else if (i < position) {
      rotate[length] = array[i];
      length++;
    }
  }
  return rotate;
}
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
