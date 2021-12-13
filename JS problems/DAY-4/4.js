// Write a javaScript program to print all even numbers between 1 to 100.

function allEvenNumbers(num) {
  for (let i = 2; i <= num; i = i + 2) {
    console.log(i);
  }
}
allEvenNumbers(10);
allEvenNumbers(20);

/*
allEventNumber(10)

num = 5
i = 2

loop:

i = 2 2 <=10 print 2 => i = 2 + 2 = 4
i = 4 4 <=10 print 4 => i = 4 + 2 = 6
i = 6 6 <=10 print 6 => i = 6 + 2 = 8
i = 8 8 <=10 print 8 => i = 8 + 2 = 10
i = 10 10 <=10 print 10 => i = 10 + 2 = 12
i = 12

loop END: 

*/
