// Write a javaScript program to print hollow diamond star pattern series of n rows using for loop.

function printChar(num, char) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function firstHalfHollowDiamond(num) {
  result = printChar(num, "*") + "\n";
  temp = num / 2 - 1;
  let space = 2;
  for (temp; temp > 0; temp--) {
    result =
      result +
      printChar(temp, "*") +
      printChar(space, " ") +
      printChar(temp, "*") +
      "\n";
    space += 2;
  }
  return result;
}
function secondHalfHollowDiamond(num) {
  result = "";
  temp = num / 2 - 1;
  let space = num - 2;
  //   console.log(space);
  for (i = 1; i <= temp; i++) {
    result =
      result +
      printChar(i, "*") +
      printChar(space, " ") +
      printChar(i, "*") +
      "\n";
    space -= 2;
  }
  return result + printChar(num, "*");
}

function printHollowDiamondStar(num) {
  return firstHalfHollowDiamond(num) + secondHalfHollowDiamond(num);
}

console.log(printHollowDiamondStar(10));
console.log(printHollowDiamondStar(12));
