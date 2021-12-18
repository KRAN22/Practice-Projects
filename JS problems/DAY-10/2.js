// Write a javaScript program to print all negative elements in an array.

function printAllNegativeElements(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < 0) {
      console.log(array[i]);
    }
  }
}

printAllNegativeElements([-100, -50, 3, 5, -150, 30, -37, 100, -78]);
