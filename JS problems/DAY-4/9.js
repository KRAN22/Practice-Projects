// Write a javascript program to print multiplication table of any number.
function multiplicationTable(num, num1) {
  for (let i = 1; i <= num1; i++) {
    console.log(num + "*" + i + "=" + i * num);
  }
}
multiplicationTable(2, 10);
console.log(" ");
multiplicationTable(4, 20);
