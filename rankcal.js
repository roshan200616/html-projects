var student = [
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
  { name: "John s", tamil: 100, english: 100, maths: 100, science: 100, social: 100 },
  { name: "Arun Kumar", tamil: 100, english: 100, maths: 100, science: 100, social: 100 },
];
arrLenth=student.length
for(let i =0; i< arrLenth;i++) {
  student[i].total = student[i].tamil + student[i].english + student[i].maths + student[i].science + student[i].social;
};
student.sort((a, b) => {
  if (b.total !== a.total) return b.total - a.total;
  if (b.maths !== a.maths) return b.maths - a.maths;
  if (b.science !== a.science) return b.science - a.science;
  if (b.social !== a.social) return b.social - a.social;
  if (b.tamil !== a.tamil) return b.tamil - a.tamil;
  if (b.english !== a.english) return b.english - a.english;
  return a.name.localeCompare(b.name);
});
function assignRanks(arr) {
  let rank = 1;
  arr[0].rank = rank; 
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const curr = arr[i];
    if (
      curr.total === prev.total &&
      curr.maths === prev.maths &&
      curr.science === prev.science &&
      curr.social === prev.social &&
      curr.tamil === prev.tamil &&
      curr.english === prev.english&&
      curr.name  === prev.name
    ) {
      curr.rank = prev.rank;
    } else {
      curr.rank = i + 1;
    }
  }
}

assignRanks(student);
for (let i = 0; i < arrLenth; i++) {
  const s = student[i];
  console.log(`Name: ${s.name}, Total: ${s.total}, Rank: ${s.rank}`);
}
