// Write a javaScript program to print hollow rhombus star series pattern using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printHollowRhombusStarSeries(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    if (i == 1 || num == i) {
      result = result + printChar(num - i, " ") + printChar(num, "*") + "\n";
    } else {
      result =
        result +
        printChar(num - i, " ") +
        "*" +
        printChar(num - 2, " ") +
        "*" +
        "\n";
    }
  }
  return result;
}

console.log(printHollowRhombusStarSeries(5));
