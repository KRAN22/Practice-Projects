// Write a javaScript program to input elements in array and sort array elements in ascending or descending order.

const elements = [1, 4, 5, 0, 29, 35, 10, 8, 7, 44, 19];

const ascendingOrder = elements.sort(function (a, b) {
  return a - b;
});

console.log(ascendingOrder);

const descendingOrder = elements.sort(function (a, b) {
  return b - a;
});

console.log(descendingOrder);
