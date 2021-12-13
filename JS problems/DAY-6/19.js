// Write a javaScript program to enter a number and print it in words.

function toWord(result) {
  switch (result) {
    case 0:
      console.log("ZERO");
      break;
    case 1:
      console.log("ONE");
      break;
    case 2:
      console.log("TWO");
      break;
    case 3:
      console.log("THREE");
      break;
    case 4:
      console.log("FOUR");
      break;
    case 5:
      console.log("FIVE");
      break;
    case 6:
      console.log("SIX");
      break;
    case 7:
      console.log("SEVEN");
      break;
    case 8:
      console.log("EIGHT");
      break;
    case 9:
      console.log("NINE");
      break;
  }
}
function numberPrintInWords(num) {
  //num is assign to temp
  let temp = num;
  let reverse = 0;
  for (; temp > 0; ) {
    reverse = reverse * 10 + (temp % 10);
    temp = parseInt(temp / 10);
  }
  //now temp is 0
  //reverse assign to temp
  temp = reverse;
  for (; temp > 0; ) {
    let result = temp % 10;
    toWord(result);
    temp = parseInt(temp / 10);
  }
}

numberPrintInWords(1012222);
