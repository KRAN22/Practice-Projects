// Write a javaScript program to delete an element from an array at specified position.

// function removeAnElement(array) {
//   array = removeArray(array, 39);
//   console.log(array);
// }

// removeAnElement([19, 39, 383, 737, 737]);

// const removeNumber = (arr, num) => arr.filter((el) => el !== num);

// let numbers = [1, 2, 3, 4];
// numbers = removeNumber(numbers, 3);
// console.log(numbers);

// function removeElement(array, x) {
//   let length = array.length;
//   for (i = 0; i < length; i++) {
//     if (array[1] == x) {
//       break;
//     }
//     if (i < length) {
//       length -= 1;
//       for (j = 1; j < length; j++) {
//         array[j] = array[j + 1];
//       }
//     }
//     return array;
//   }
// }

// console.log(removeElement([10, 20, 30, 40, 50, 60], 4));

function removeElementWithExtraArray(array, position) {
  let temp = [];
  for (i = 0; i < array.length; i++) {
    if (i != position) {
      temp.push(array[i]);
    }
  }
  return temp;
}

console.log(removeElementWithExtraArray([10, 20, 30, 40, 50, 60], 1));

function removeElement(arr, pos) {
  for (i = pos; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.pop();
  return arr;
}

console.log(removeElement([10, 20, 30, 40, 50, 60], 3));
