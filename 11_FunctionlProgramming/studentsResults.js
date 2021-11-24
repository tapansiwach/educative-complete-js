// compute and return the female student’s results (name and average grade)

// Input
const students = [
  {
    name: "Anna",
    sex: "f",
    grades: [4.5, 3.5, 4]
  },
  {
    name: "Dennis",
    sex: "m",
    country: "Germany",
    grades: [5, 1.5, 4]
  },
  {
    name: "Martha",
    sex: "f",
    grades: [5, 4, 2.5, 3]
  },
  {
    name: "Brock",
    sex: "m",
    grades: [4, 3, 2]
  }
];
// Expected output
[{ name: 'Anna', sex: 'f', grades: 4 },
{ name: 'Martha', sex: 'f', grades: 3.625 }]

function studentResult(students) {
  return students
    .filter(student => student.sex === "f")
    .map(femaleStudent =>
    ({
      ...femaleStudent,
      avreageGrade: femaleStudent.grades
        .reduce((average, x, _, { length }) => average + x / length, 0)
    }));
}

console.log(studentResult(students));