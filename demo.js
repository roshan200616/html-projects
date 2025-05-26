var students = [
  { name: "Banu Priya", tamil: 90, english: 84, maths: 95, science: 89, social: 87 },
  { name: "Banu", tamil: 90, english: 84, maths: 89, science: 95, social: 87 },
  { name: "Charan Raj", tamil: 76, english: 70, maths: 80, science: 75, social: 73 },
  { name: "Deepika S", tamil: 88, english: 91, maths: 89, science: 93, social: 90 },
  { name: "Eswar M", tamil: 67, english: 65, maths: 70, science: 68, social: 72 },
  { name: "Fathima N", tamil: 92, english: 89, maths: 94, science: 90, social: 88 },
  { name: "Gokul V", tamil: 81, english: 77, maths: 85, science: 83, social: 80 },
  { name: "Harini R", tamil: 78, english: 82, maths: 79, science: 80, social: 85 },
  { name: "Imran K", tamil: 69, english: 75, maths: 72, science: 70, social: 74 },
  { name: "Janani S", tamil: 95, english: 90, maths: 97, science: 96, social: 94 },
  { name: "John s", tamil: 100, english: 100, maths: 100, science: 99, social: 100 },
  { name: "Arun Kumar", tamil: 100, english: 99, maths: 100, science: 100, social: 100 },
];

// Step 1: Calculate total marks and add as a property
students.forEach(student => {
  student.total = student.tamil + student.english + student.maths + student.science + student.social;
});

// Step 2: Sort students by total desc, then maths desc, science desc, social desc, tamil desc, english desc
students.sort((a, b) => {
  if (b.total !== a.total) return b.total - a.total;
  if (b.maths !== a.maths) return b.maths - a.maths;
  if (b.science !== a.science) return b.science - a.science;
  if (b.social !== a.social) return b.social - a.social;
  if (b.tamil !== a.tamil) return b.tamil - a.tamil;
  if (b.english !== a.english) return b.english - a.english;
  return a.name.localeCompare(b.name);
});

// Step 3: Assign ranks with ties considered
function assignRanks(arr) {
  let rank = 1;
  arr[0].rank = rank; // first student is rank 1

  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];

    // Check if current student has same scores as previous in all criteria
    if (
      curr.total === prev.total &&
      curr.maths === prev.maths &&
      curr.science === prev.science &&
      curr.social === prev.social &&
      curr.tamil === prev.tamil &&
      curr.english === prev.english
    ) {
      // same rank as previous student
      curr.rank = prev.rank;
    } else {
      // new rank is current index + 1 (since array is sorted)
      curr.rank = i + 1;
    }
  }
}

assignRanks(students);

// Print results
students.forEach(s => {
  console.log(`Name: ${s.name}, Total: ${s.total}, Rank: ${s.rank}`);
});
