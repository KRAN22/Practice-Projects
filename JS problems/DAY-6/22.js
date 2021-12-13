// Write a javaScript program to find all factors of a number.

function factorsOfaNumber(num) {
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
  console.log(num);
}

factorsOfaNumber(10);

//OR

// function factorsOfaNumber(num) {
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       console.log(i);
//     }
//   }
//   console.log(num);
// }

// factorsOfaNumber(10000);
