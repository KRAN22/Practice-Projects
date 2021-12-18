// Write a javaScript program to print square star(*) pattern series of N rows.

function printSquareStar(num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    string += singleRow(num) + "\n";
  }
  return string;
}

function singleRow(num) {
  str = "";
  for (let j = 1; j <= num; j++) {
    str = str + "*";
  }
  return str;
}

console.log(printSquareStar(4));
console.log(printSquareStar(6));
