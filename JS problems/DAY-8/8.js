// Write a javaScript program to print hollow mirrored rhombus star pattern series of N rows using for loop

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printHollowMirroredRhombusStarSeries(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    if (i == 1 || num == i) {
      result = result + printChar(i, " ") + printChar(num, "*") + "\n";
    } else {
      result =
        result + printChar(i, " ") + "*" + printChar(num - 2, " ") + "*" + "\n";
    }
  }
  return result;
}

console.log(printHollowMirroredRhombusStarSeries(5));
