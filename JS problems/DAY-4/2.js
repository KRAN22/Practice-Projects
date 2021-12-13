// Write a javaScript program to print all natural numbers in reverse (from n to 1).

function naturalNumberInReverse(i) {
  for (i; 1 <= i; i--) {
    console.log(i);
  }
}
naturalNumberInReverse(10);

/*
naturalNumberInReverse(10)
loop start
 i=10 1<=10 => print 10 => i=9
 i=9 1<=9 => print 9 => i=8
 i=8 1<=8 => print 8 => i=7
 i=7 1<=7 => print 7 => i=6
 i=6 1<=6 => print 6 => i=5
 i=5 1<=5 => print 5 => i=4
 i=4 1<=4 => print 4 => i=3
 i=3 1<=3 => print 3 => i=2
 i=2 1<=2 => print 2 => i=1
 i=1 1<=1 => print 1 => i=0
 i=0

loop end
*/
