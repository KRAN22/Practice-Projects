// Write a javaScript program to enter a number and print it in words.
// string palindrome

function stringPalindrome(num) {
  let str = "";
  str += num;
  for (var i = 0; i < str.length; i++) {
    // console.log(str[i]);
    switch (str[i]) {
      case "0":
        console.log("ZERO");
        break;
      case "1":
        console.log("ONE");
        break;
      case "2":
        console.log("TWO");
        break;
      case "3":
        console.log("THREE");
        break;
      case "4":
        console.log("FOUR");
        break;
      case "5":
        console.log("FIVE");
        break;
      case "6":
        console.log("SIX");
        break;
      case "7":
        console.log("SEVEN");
        break;
      case "8":
        console.log("EIGHT");
        break;
      case "9":
        console.log("NINE");
        break;
    }
  }
}
stringPalindrome(10123450);
