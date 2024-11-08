function gradingStudents(grades) {
   for (let x = 0; x < grades.length; x++) {
      if (grades[x] >= 38 && grades[x] % 5 >= 3) {
         grades[x] = Math.round(grades[x] / 5) * 5;
      }
   }

   return grades;
}

console.log(gradingStudents([73, 67, 38, 33]));
