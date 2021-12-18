// Write a javaScript program to sort even and odd elements of array separately.

const number = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const oddEven = number.sort(function (num) {
  if (num % 2 === 0) {
    return -1;
  } else {
    return 1;
  }
});

console.log(oddEven);
