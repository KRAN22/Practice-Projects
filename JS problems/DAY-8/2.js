// Write a javaScript program to print hollow square or rectangle star(*) pattern series using for loop.
function singleRow(num) {
  str = "";
  for (let j = 1; j <= num; j++) {
    str = str + "*";
  }

  return str;
}

function secondRow(num) {
  str = "";
  for (let i = 1; i <= num; i++) {
    if (i == 1 || num == i) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  return str;
}

function printHollowSquare(num) {
  hollow = "";
  for (let n = 1; n <= num; n++) {
    if (n == 1 || n == num) {
      hollow += singleRow(num) + "\n";
    } else {
      hollow += secondRow(num) + "\n";
    }
  }
  return hollow;
}

console.log(printHollowSquare(5));
console.log(printHollowSquare(6));
