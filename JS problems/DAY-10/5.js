// Write a javaScript program to find second largest element in an array.

function FindSecondLargestElement(array) {
  max1 = array[0];
  max2 = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }
  return { max1, max2 };
}
console.log(FindSecondLargestElement([10, 20, 62, 93, 101, 99]));
console.log(FindSecondLargestElement([2, 1, 3, 5, 4]));
