// Write a javaScript program to print hollow pyramid or hollow equilateral triangle star pattern series using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function hollowEquilateralTriangleStar(num) {
  let temp = parseInt(Math.ceil(num / 2));
  let temp1 = temp;
  let result = printChar(temp, " ") + "*" + "\n";
  for (let i = 1; i <= temp; i += 2) {
    result =
      result + printChar(--temp1, " ") + "*" + printChar(i, " ") + "*" + "\n";
  }
  return result + " " + printChar(num, "*");
}

// function pattern(num) {
//   result = printChar(Math.ceil(num / 2), " ") + "*\n";
//   temp = 1;
//   for (i = Math.floor(num / 2); i > 1; i = i - 1) {
//     result += printChar(i, " ") + "*" + printChar(temp, " ") + "*\n";
//     temp = temp + 2;
//   }
//   result += " " + printChar(num, "*");
//   return result;
// }
// console.log(pattern(9));
// console.log(pattern(13));
console.log(hollowEquilateralTriangleStar(9));
console.log(hollowEquilateralTriangleStar(13));
