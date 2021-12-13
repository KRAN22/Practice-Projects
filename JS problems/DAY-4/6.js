// Write a javaScript program to find sum of all natural numbers between 1 to n.
function sumOfAllNaturalNumber(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfAllNaturalNumber(2));

console.log(sumOfAllNaturalNumber(5));

/*
sumOfAllNaturalNumber(2);
num = 2
sum = 0

Loop:
i=1, sum = 0 + 1 = 1
i=2, sum = 1 + 2 = 3
i=3
End:

return 3

sumOfAllNaturalNumber(5)
num=5
sum=0

loop:
i=1, sum = 0 + 1 = 1
i=2, sum = 1 + 2 = 3
i=3, sum = 3 + 3 = 6
i=4, sum = 6 + 4 = 10
i=5, sum = 10 + 5 = 15
i=6

loop end:

return 15
*/
