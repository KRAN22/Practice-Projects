// Write a function to get the grade of a student by marks. Function should return the grade
// 90 - 100 => A
// 80 - 90  => B
// 70 - 80  => C
// 60 - 70  => D
// < 60 => Fail

function gradeOfaStudentByMarks(marks) {
  if (marks >= 90 && marks <= 100) {
    return "A";
  }
  if (marks >= 80 && marks < 90) {
    return "B";
  }
  if (marks >= 70 && marks < 80) {
    return "C";
  }
  if (marks >= 60 && marks < 70) {
    return "D";
  }
  if (marks < 60) {
    return "Fail";
  }
}
console.log(gradeOfaStudentByMarks(61) == "D");
console.log(gradeOfaStudentByMarks(70) == "C");
console.log(gradeOfaStudentByMarks(77) == "C");
console.log(gradeOfaStudentByMarks(80) == "B");
console.log(gradeOfaStudentByMarks(93) == "A");
