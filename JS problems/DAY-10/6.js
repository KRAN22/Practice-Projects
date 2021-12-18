// Write a javaScript program to input elements in array from user and count even and odd elements in array

function evenNumber(array) {
  evenCount = 0;
  oddCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 1) {
      oddCount++;
    } else {
      evenCount++;
    }
  }
  return { evenCount, oddCount };
}

console.log(evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(evenNumber([11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 19]));
