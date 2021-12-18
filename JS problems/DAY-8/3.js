// Write a javaScript program to print hollow square star pattern with diagonal using loops.

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
    if (i == 1 || num == i || num % i == 1) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  return str;
}

function _3thRow(num) {
  str = "";
  for (let n = 1; n <= num; n++) {
    if (n == 1 || num == n || num % n == 2) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  return str;
}

// console.log(singleRow(5));
// console.log(secondRow(5));
// console.log(_3thRow(5));

function starPatternWithDiagonal(num) {
  diagonal = "";
  for (let k = 1; k <= num; k++) {
    if (k == 1 || k == num) {
      diagonal = diagonal + singleRow(num) + "\n";
    } else if (k == 1 || num == k || num % k == 1) {
      diagonal = diagonal + secondRow(num) + "\n";
    } else {
      diagonal = diagonal + _3thRow(num) + "\n";
    }
  }
  return diagonal;
}

console.log(starPatternWithDiagonal(5));
// console.log(starPatternWithDiagonal(6));
