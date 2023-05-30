function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      roundedGrades.push(grades[i]);
    } else {
      const roundOff = Math.ceil(grades[i] / 5) * 5;
      if (roundOff - grades[i] < 3) {
        roundedGrades.push(roundOff);
      } else {
        roundedGrades.push(grades[i]);
      }
    }
  }

  return roundedGrades;
    }

const grades = [73, 67, 38, 33];
const roundedGrades = gradingStudents(grades);
console.log(roundedGrades);
