// Write a javaScript program to read and print elements of array

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray([10, 20, 30, 40, 550]);
printArray([1, 22, 333, 4444, 55555, 666666]);


function printArray(array) {
  array.forEach((n) => {
    console.log(n);
  });
}

printArray([10, 20, 30, 40, 550]);
