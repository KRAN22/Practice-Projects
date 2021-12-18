// Write a javascript program to print rhombus star pattern of N rows using for loop.

function printChar(num, char) {
  str = "";
  for (let i = 1; i <= num; i++) {
    str += char;
  }
  return str;
}

function printRhombusStarPattern(num) {
  result = "";
  for (i = 1; i <= num; i++) {
    result = result + printChar(num - i + 1, " ") + printChar(num, "*") + "\n";
  }
  return result;
}
console.log(printRhombusStarPattern(5));

// function row(num) {
//   let str = "";
//   let temp = num;
//   for (let i = 1; i <= num; i++) {
//     if (i >= 5 && i < 10) {
//       str = str + "*";
//     } else {
//       str += " ";
//     }
//   }
//   return str;
// }

// console.log(row(10));
