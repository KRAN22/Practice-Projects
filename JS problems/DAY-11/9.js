// Write a javaScript program to insert an element in an array.

// method-1

function insertAnElement(array) {
  array.splice(3, 0, 29);
  console.log(array);
}

insertAnElement([10, 20, 40, 30, 28, 93, 30]);

// method-2

function insertElement(array, item, position) {
  length = array.length;
  for (let i = length - 1; i >= position; i--) {
    array[length] = array[i];
    length--;
  }
  array[position] = item;
  return array;
}

console.log(insertElement([10, 20, 40, 30, 28, 93, 30], 99, 4));

// method-3

function insertElement(array, item, position) {
  arr = [];
  for (let i = 0; i < position; i++) {
    arr[i] = array[i];
  }

  arr[position] = item;

  for (let i = position + 1; i <= array.length; i++) {
    arr[i] = array[position];
    position++;
  }
  return arr;
}

console.log(insertElement([10, 20, 40, 30, 28, 93, 30], 99, 4));
